// function to remove widget waterMark
export const removeWidgetWatermark = (widgetId) => {
  const container = document.getElementById(`${widgetId}`);
  const watermarkDiv = Array.from(
    container.querySelectorAll(".GlgCanvasContainer div")
  ).find((child) => child.innerHTML.includes("GLG Community Edition"));

  console.log(watermarkDiv, "GLG watermark div");
  if (watermarkDiv) {
    watermarkDiv.remove();
  }
};
