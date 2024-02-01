// function to remove widget waterMark
export const removeWidgetWatermark = (widgetId) => {
  const container = document.getElementById(`${widgetId}`);
  const watermarkDiv = Array.from(
    container.querySelectorAll(".GlgCanvasContainer div")
  ).find((child) => child.innerHTML.includes("GLG Community Edition"));

  if (watermarkDiv) {
    watermarkDiv.remove();
  }
};

// generate alphabtical unique id
export const alphabeticUniqueID = () => {
  const timestamp = new Date().getTime().toString(36);
  const randomChars = Math.random().toString(36).substr(2, 5);
  return timestamp + randomChars;
};
