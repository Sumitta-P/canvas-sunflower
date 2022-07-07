const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ],
  // animate: true
};

const degToRad = (degrees) => {
  return degrees / 180 * Math.PI;
};

// const animate = () => {
//   requestAnimationFrame(animate);
// };
// animate();

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    
    context.fillStyle = 'white';
   
    const cx = width * 0.5;
    const cy = height * 0.5;
    let x,y;
    
    const num = 1000;
    const radius = width * 0.2;
    const dotSize = 6;
    // const PHI = (1 + Math.sqrt(3)) / 2;
  

    for (i = 0; i < num; i++) {
      // const slice = degToRad(360 / num);
      const slice = degToRad(360*(i / num));
      const angle = i;
      const dist = slice * radius;
      const r = slice * dotSize; 
                  
      x = cx + dist * Math.sin(angle);
      y = cy + dist * Math.cos(angle);
      
      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      
    
      context.beginPath();
      context.arc(0, 0, r, 0, Math.PI * 2);
      context.fill();
      context.restore(); 
    }
  };
};

canvasSketch(sketch, settings);
