import useCanvas from './hooks/useCanvas'

const Canvas = (props) => {

    const { setup, draw, ...rest } = props;

    const canvasRef = useCanvas(setup,draw)

    return <canvas ref={canvasRef}  {...rest} height={innerHeight} width={innerWidth}/>;
};

export default Canvas;
