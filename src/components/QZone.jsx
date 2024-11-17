import swimmingImg from "../assets/swimming.png"
import classImg from "../assets/class.png"
import playgroundImg from "../assets/playground.png"

const QZone = () => {
    return (
        <div className="my-5 p-4 bg-base-200">
            <h3 className="text-xl font-semibold pb-8">Q-Zone</h3>
            <div className="flex flex-col justify-center items-center gap-4">
                <img src={swimmingImg} className="w-full" alt="" />
                <img src={classImg} className="w-full" alt="" />
                <img src={playgroundImg} className="w-full" alt="" />
            </div>
        </div>
    );
};

export default QZone;