import React, { useRef, useEffect, useState } from 'react';

const MandalaColoringPopup = ({ onClose, mandalaUrl }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#ef476f');
  const [lineWidth, setLineWidth] = useState(5);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(offsetX, offsetY);
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.stroke();
  };

  const stopDrawing = () => setIsDrawing(false);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackgroundImage();
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'mandala_coloring.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  const drawBackgroundImage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.crossOrigin = 'anonymous'; 
    image.src = mandalaUrl;

    image.onload = () => {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };

    image.onerror = () => {
      console.error('Failed to load image:', mandalaUrl);
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 600;
    canvas.height = 600;
    drawBackgroundImage();
  }, [mandalaUrl]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-2xl w-full max-w-3xl text-center">
        <h2 className="text-2xl font-bold mb-4 text-pink-700 dark:text-white">Mandala Coloring Mode</h2>

        <canvas
          ref={canvasRef}
          className="mx-auto border-4 border-pink-300 dark:border-pink-500 rounded-xl mb-4 cursor-crosshair bg-white dark:bg-gray-800"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />

        <div className="flex flex-wrap justify-center gap-4 my-4">
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-10 h-10 rounded-full border border-gray-400 cursor-pointer"
          />
          <input
            type="range"
            min="1"
            max="20"
            value={lineWidth}
            onChange={(e) => setLineWidth(e.target.value)}
            className="w-40"
          />
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button onClick={clearCanvas} className="px-4 py-2 bg-pink-500 hover:bg-gray-600 text-white rounded-lg font-medium">
            Clear
          </button>
          <button onClick={downloadCanvas} className="px-4 py-2 bg-pink-500 hover:bg-gray-600 text-white rounded-lg font-medium">
            Download
          </button>
          <button onClick={onClose} className="px-4 py-2 bg-pink-700 hover:bg-gray-900 text-white rounded-lg font-medium">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MandalaColoringPopup;
