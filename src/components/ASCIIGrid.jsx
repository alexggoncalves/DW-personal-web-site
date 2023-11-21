import { useEffect } from "react";
import Canvas from "./Canvas";
import Char from "./Char";
import ASCIIImage from "./ASCIIImage.js"

const ASCIIGrid = () => {
    let size = { width: 0, height: 0 };
    let hResolution
    let vResolution

    const cellWidth = 8;
    const cellHeight = 8;

    const { devicePixelRatio:ratio=1 } = window

    let grid

    let image1

    const setupASCIIGrid = (ctx) => {
        ctx.font = `${cellHeight}px Fira Code`;
        ctx.textAlign = "center";
        
    };

    const drawASCIIGrid = (ctx, frameCount) => {
        size.width = ctx.canvas.width;
        size.height = ctx.canvas.height;
        // draw background
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        for (let i = 0; i < hResolution; i++) {
            for (let j = 0; j < vResolution; j++) {
                if (grid[i][j] != null) {
                    grid[i][j].drawChar(ctx);
                    if (grid[i][j].isDead()) grid[i][j] = null;
                }
            }
        }

        if(image1){
            
           image1.drawOnGrid(hResolution/(3*devicePixelRatio),vResolution/(2*devicePixelRatio),grid,cellWidth,cellHeight) 


        }
    };

    const handleMouseMove = (e) => {
        const i = Math.round((e.clientX / size.width) * hResolution);
        const j = Math.round((e.clientY / size.height) * vResolution);

        if (i >= grid.size || j >= grid[0].size || grid[i][j] != null) return;

        grid[i][j] = new Char(i * cellWidth, j * cellHeight + window.scrollY,200);
    };

    useEffect(() => {
        const generateGrid = () => {
            hResolution = Math.ceil(size.width / cellWidth);
            vResolution = Math.ceil(size.height / cellHeight);
            grid = [...Array(hResolution)].map(() =>
                Array(vResolution).fill(null)
            );
        };
        generateGrid();

        // Create images to be translated into ascii
        image1 = new ASCIIImage("src/assets/catPixelated.png")


        window.addEventListener("resize", generateGrid);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", generateGrid);
            window.removeEventListener("mouseMove", handleMouseMove);
        };
        
    }, []);

    return (
        <Canvas
            setup={setupASCIIGrid}
            draw={drawASCIIGrid}
            className={"ascii-grid"}
        />
    );
};

export default ASCIIGrid;
