import useCanvas from './hooks/useCanvas'

const Canvas = (props) => {

    const { setup, draw, fullpage, ...rest } = props;

    const canvasRef = useCanvas(draw,setup)

    

    return <canvas ref={canvasRef}  {...rest} />;
};

export default Canvas;
