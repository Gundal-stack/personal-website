      // Get the canvas and set the dimensions
      const canvas = document.querySelector("canvas");
      const width = canvas.width = window.innerWidth;
      const height = canvas.height = window.innerHeight;

      // Get the canvas context
      const ctx = canvas.getContext("2d");

      // Set the background color
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      // Define the circles array
      const circles = [
        { x: 100, y: 100, dx: 5, dy: 5, radius: 20, color: "white" },
        { x: 200, y: 200, dx: -5, dy: -5, radius: 30, color: "red" },
        // Add additional circles here
      ];

      // Animate the circles
      function animate() {
        requestAnimationFrame(animate);

        // Clear the canvas
        ctx.clearRect(0, 0, width, height);

        // Loop through the circles array
        for (const circle of circles) {
          // Draw the circle
          ctx.beginPath();
          ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
          ctx.fillStyle = circle.color;
          ctx.fill();

          // Update the position of the circle
          circle.x += circle.dx;
          circle.y += circle.dy;

          // Change direction when the circle hits the edge of the screen
          if (circle.x + circle.radius > width || circle.x - circle.radius < 0) {
            circle.dx = -circle.dx;
            circle.color = getRandomColor();
          }
          if (circle.y + circle.radius > height || circle.y - circle.radius < 0) {
            circle.dy = -circle.dy;
            circle.color = getRandomColor();
          }
        }
      }

      // Generate a random color
      function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
      }

      // Start the animation
      animate();
