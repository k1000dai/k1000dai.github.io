import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    Alert,
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    CircularProgress,
    Stack,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from "@mui/material";
import {
    Download as DownloadIcon,
    Functions as FunctionsIcon,
    RestartAlt as ResetIcon,
} from "@mui/icons-material";
import mathJaxScriptUrl from "mathjax-full/es5/tex-svg-full.js?url";

const DEFAULT_TEX = String.raw`\int_{0}^{\infty} e^{-x^2} \, dx = \frac{\sqrt{\pi}}{2}`;
const SAMPLE_FORMULAS = [
    {
        label: "Euler",
        value: String.raw`e^{i\pi} + 1 = 0`,
    },
    {
        label: "Matrix",
        value: String.raw`\begin{bmatrix} a & b \\ c & d \end{bmatrix}`,
    },
    {
        label: "Series",
        value: String.raw`\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}`,
    },
];

let mathJaxReadyPromise = null;

function unwrapMathInput(source, fallbackDisplayMode) {
    const trimmed = source.trim();

    if (!trimmed) {
        return {
            latex: "",
            displayMode: fallbackDisplayMode,
            usedWrapper: false,
        };
    }

    if (trimmed.startsWith("$$") && trimmed.endsWith("$$") && trimmed.length > 4) {
        return {
            latex: trimmed.slice(2, -2).trim(),
            displayMode: true,
            usedWrapper: true,
        };
    }

    if (trimmed.startsWith("\\[") && trimmed.endsWith("\\]") && trimmed.length > 4) {
        return {
            latex: trimmed.slice(2, -2).trim(),
            displayMode: true,
            usedWrapper: true,
        };
    }

    if (trimmed.startsWith("\\(") && trimmed.endsWith("\\)") && trimmed.length > 4) {
        return {
            latex: trimmed.slice(2, -2).trim(),
            displayMode: false,
            usedWrapper: true,
        };
    }

    if (trimmed.startsWith("$") && trimmed.endsWith("$") && trimmed.length > 2 && !trimmed.startsWith("$$")) {
        return {
            latex: trimmed.slice(1, -1).trim(),
            displayMode: false,
            usedWrapper: true,
        };
    }

    return {
        latex: trimmed,
        displayMode: fallbackDisplayMode,
        usedWrapper: false,
    };
}

function loadMathJax() {
    if (window.MathJax?.tex2svgPromise) {
        return Promise.resolve(window.MathJax);
    }

    if (mathJaxReadyPromise) {
        return mathJaxReadyPromise;
    }

    mathJaxReadyPromise = new Promise((resolve, reject) => {
        window.MathJax = {
            startup: {
                typeset: false,
                ready: () => {
                    window.MathJax.startup.defaultReady();
                    resolve(window.MathJax);
                },
            },
            svg: {
                fontCache: "none",
            },
            options: {
                enableMenu: false,
            },
        };

        const script = document.createElement("script");
        script.src = mathJaxScriptUrl;
        script.async = true;
        script.dataset.mathjaxExporter = "true";
        script.onerror = () => {
            mathJaxReadyPromise = null;
            reject(new Error("Failed to load MathJax."));
        };
        document.head.appendChild(script);
    });

    return mathJaxReadyPromise;
}

function svgMarkupToPng(svgMarkup, width, height) {
    return new Promise((resolve, reject) => {
        const svgBlob = new Blob([svgMarkup], {
            type: "image/svg+xml;charset=utf-8",
        });
        const objectUrl = URL.createObjectURL(svgBlob);
        const image = new Image();

        const cleanup = () => {
            URL.revokeObjectURL(objectUrl);
        };

        image.onload = () => {
            const padding = 24;
            const scale = 3;
            const canvas = document.createElement("canvas");
            const canvasWidth = Math.max(1, Math.ceil((width + padding * 2) * scale));
            const canvasHeight = Math.max(1, Math.ceil((height + padding * 2) * scale));
            const context = canvas.getContext("2d");

            if (!context) {
                cleanup();
                reject(new Error("Canvas 2D context is unavailable."));
                return;
            }

            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            context.scale(scale, scale);
            context.clearRect(0, 0, width + padding * 2, height + padding * 2);
            context.drawImage(image, padding, padding, width, height);

            cleanup();
            resolve(canvas.toDataURL("image/png"));
        };

        image.onerror = () => {
            cleanup();
            reject(new Error("Failed to rasterize the SVG export."));
        };

        image.src = objectUrl;
    });
}

export const Magic8BallView = () => {
    const previewRef = useRef(null);
    const [texInput, setTexInput] = useState(DEFAULT_TEX);
    const [displayMode, setDisplayMode] = useState("display");
    const [svgMarkup, setSvgMarkup] = useState("");
    const [renderError, setRenderError] = useState("");
    const [exportError, setExportError] = useState("");
    const [isRendering, setIsRendering] = useState(true);
    const [isExporting, setIsExporting] = useState(false);

    const parsedInput = useMemo(
        () => unwrapMathInput(texInput, displayMode === "display"),
        [displayMode, texInput],
    );
    const hasRenderableInput = Boolean(parsedInput.latex);
    const exportDisabled = !svgMarkup || Boolean(renderError) || isRendering || isExporting;
    const effectiveModeLabel = parsedInput.displayMode ? "Display math" : "Inline math";

    useEffect(() => {
        let cancelled = false;

        if (!hasRenderableInput) {
            setSvgMarkup("");
            setRenderError("");
            setIsRendering(false);
            return () => {
                cancelled = true;
            };
        }

        setIsRendering(true);
        setRenderError("");

        loadMathJax()
            .then(async (MathJax) => {
                const wrapper = await MathJax.tex2svgPromise(parsedInput.latex, {
                    display: parsedInput.displayMode,
                    em: 16,
                    ex: 8,
                    containerWidth: 1200,
                    scale: 1,
                });
                const svgElement = wrapper.querySelector("svg");

                if (!svgElement) {
                    throw new Error("MathJax did not return an SVG element.");
                }

                const nextMarkup = svgElement.outerHTML
                    .replace(/ (?:role|focusable|aria-hidden)=".*?"/g, "")
                    .replace(/currentColor/g, "#111827");

                if (!cancelled) {
                    setSvgMarkup(nextMarkup);
                    setRenderError("");
                    setIsRendering(false);
                }
            })
            .catch((error) => {
                if (!cancelled) {
                    setSvgMarkup("");
                    setRenderError(
                        error instanceof Error ? error.message : "Failed to render TeX.",
                    );
                    setIsRendering(false);
                }
            });

        return () => {
            cancelled = true;
        };
    }, [hasRenderableInput, parsedInput.displayMode, parsedInput.latex]);

    const handleExport = async () => {
        if (exportDisabled) {
            return;
        }

        const svgElement = previewRef.current?.querySelector("svg");
        const bounds = svgElement?.getBoundingClientRect();
        const exportWidth = Math.ceil(bounds?.width ?? 0);
        const exportHeight = Math.ceil(bounds?.height ?? 0);

        if (!exportWidth || !exportHeight) {
            setExportError("Could not measure the rendered formula for export.");
            return;
        }

        setExportError("");
        setIsExporting(true);

        try {
            const sizedSvgMarkup = svgMarkup
                .replace(/width="[^"]+"/, `width="${exportWidth}"`)
                .replace(/height="[^"]+"/, `height="${exportHeight}"`);
            const dataUrl = await svgMarkupToPng(sizedSvgMarkup, exportWidth, exportHeight);
            const link = document.createElement("a");

            link.download = "tex-export.png";
            link.href = dataUrl;
            link.click();
        } catch (error) {
            setExportError(
                error instanceof Error ? error.message : "PNG export failed. Please try again.",
            );
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                minHeight: { xs: "auto", md: "78vh" },
                py: { xs: 1, md: 2 },
            }}
        >
            <Box sx={{ maxWidth: 760 }}>
                <Typography variant="h4" gutterBottom>
                    TeX PNG Exporter
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 720 }}>
                    Render a TeX math command in the browser, preview it live, and export it as a
                    transparent PNG for slides, docs, or social posts.
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "grid",
                    gap: 3,
                    gridTemplateColumns: { xs: "1fr", xl: "minmax(320px, 460px) minmax(0, 1fr)" },
                    alignItems: "start",
                }}
            >
                <Card className="card">
                    <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                        <Stack spacing={2.5}>
                            <Box>
                                <Typography variant="h6" gutterBottom>
                                    Input
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Raw TeX, <code>$...$</code>, <code>$$...$$</code>,{" "}
                                    <code>\(...\)</code>, and <code>\[...\]</code> are supported.
                                </Typography>
                            </Box>

                            <TextField
                                label="TeX command"
                                value={texInput}
                                onChange={(event) => {
                                    setTexInput(event.target.value);
                                    setExportError("");
                                }}
                                multiline
                                minRows={8}
                                maxRows={14}
                                fullWidth
                                placeholder={String.raw`\frac{a+b}{c}`}
                                spellCheck={false}
                                autoComplete="off"
                                sx={{
                                    "& .MuiInputBase-root": {
                                        alignItems: "flex-start",
                                        fontFamily: '"JetBrains Mono", "SFMono-Regular", monospace',
                                        fontSize: "0.95rem",
                                        lineHeight: 1.6,
                                    },
                                }}
                            />

                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={1.5}
                                sx={{ alignItems: { xs: "stretch", sm: "center" } }}
                            >
                                <ToggleButtonGroup
                                    exclusive
                                    value={displayMode}
                                    onChange={(_, value) => {
                                        if (value) {
                                            setDisplayMode(value);
                                        }
                                    }}
                                    color="primary"
                                    size="small"
                                >
                                    <ToggleButton value="inline">Inline</ToggleButton>
                                    <ToggleButton value="display">Display</ToggleButton>
                                </ToggleButtonGroup>
                                <Chip
                                    size="small"
                                    icon={<FunctionsIcon />}
                                    label={
                                        parsedInput.usedWrapper
                                            ? `${effectiveModeLabel} from wrapper`
                                            : `${effectiveModeLabel} from toggle`
                                    }
                                    sx={{
                                        alignSelf: { xs: "flex-start", sm: "center" },
                                        backgroundColor: "rgba(88, 200, 191, 0.12)",
                                    }}
                                />
                            </Stack>

                            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
                                {SAMPLE_FORMULAS.map((sample) => (
                                    <Chip
                                        key={sample.label}
                                        clickable
                                        label={sample.label}
                                        onClick={() => {
                                            setTexInput(sample.value);
                                            setExportError("");
                                        }}
                                        variant="outlined"
                                    />
                                ))}
                            </Stack>

                            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                                <Button
                                    variant="contained"
                                    startIcon={<DownloadIcon />}
                                    onClick={handleExport}
                                    disabled={exportDisabled}
                                >
                                    {isExporting ? "Exporting..." : "Export transparent PNG"}
                                </Button>
                                <Button
                                    variant="outlined"
                                    startIcon={<ResetIcon />}
                                    onClick={() => {
                                        setTexInput(DEFAULT_TEX);
                                        setDisplayMode("display");
                                        setExportError("");
                                    }}
                                >
                                    Reset sample
                                </Button>
                            </Stack>

                            {(renderError || exportError) && (
                                <Alert severity="error">{renderError || exportError}</Alert>
                            )}
                        </Stack>
                    </CardContent>
                </Card>

                <Card className="card">
                    <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                        <Stack spacing={2}>
                            <Box>
                                <Typography variant="h6" gutterBottom>
                                    Live preview
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    The exporter renders browser-side MathJax SVG first, then
                                    rasterizes that SVG into a transparent PNG.
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    minHeight: { xs: 220, md: 320 },
                                    borderRadius: 4,
                                    p: { xs: 2, md: 3 },
                                    border: "1px solid rgba(11, 17, 24, 0.08)",
                                    background:
                                        "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(244,247,250,0.96) 100%)",
                                    boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.9)",
                                    overflow: "auto",
                                }}
                            >
                                {isRendering ? (
                                    <Stack
                                        spacing={1.5}
                                        sx={{
                                            minHeight: "100%",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            textAlign: "center",
                                            color: "#475569",
                                        }}
                                    >
                                        <CircularProgress size={28} />
                                        <Typography variant="body1">
                                            Rendering math...
                                        </Typography>
                                    </Stack>
                                ) : hasRenderableInput && !renderError ? (
                                    <Box
                                        ref={previewRef}
                                        sx={{
                                            width: "fit-content",
                                            maxWidth: "100%",
                                            mx: parsedInput.displayMode ? "auto" : 0,
                                            p: { xs: 2.5, md: 3.5 },
                                            color: "#111827",
                                            "& svg": {
                                                display: parsedInput.displayMode ? "block" : "inline-block",
                                                maxWidth: "100%",
                                                height: "auto",
                                            },
                                        }}
                                        dangerouslySetInnerHTML={{ __html: svgMarkup }}
                                    />
                                ) : (
                                    <Stack
                                        spacing={1}
                                        sx={{
                                            minHeight: "100%",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            textAlign: "center",
                                            color: "#475569",
                                        }}
                                    >
                                        <FunctionsIcon sx={{ fontSize: 36, opacity: 0.7 }} />
                                        <Typography variant="body1">
                                            {renderError
                                                ? "Fix the TeX command to re-enable export."
                                                : "Enter a TeX command to preview it here."}
                                        </Typography>
                                    </Stack>
                                )}
                            </Box>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};
