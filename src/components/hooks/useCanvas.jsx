import { useRef, useEffect } from "react"

const useCanvas = (setup,draw) => {
    const canvasRef = useRef(null)

    const resizeCanvasToDisplaySize = (canvas) => {
        const { width, height } = canvas.getBoundingClientRect()

        if (canvas.width !== width || canvas.height !== height) {
            const { devicePixelRatio:ratio=1 } = window
            const context = canvas.getContext('2d')
            
            canvas.width = width * ratio
            canvas.height = height * ratio
            context.scale(ratio, ratio)
            return true
        }

        return false
    };

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext("2d")

        let frameCount = 0
        let animationFrameId

        if(frameCount == 0) setup(context)

        const render = (elapsed) => {
            frameCount++
            resizeCanvasToDisplaySize(canvas)
            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    
    }, [draw])

    return canvasRef
};

export default useCanvas
