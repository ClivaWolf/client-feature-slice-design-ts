import Button from "shared/ui/button";
import Selector from "shared/ui/selector";

const TestPage = () => {
    return (
        <div className="m-auto bg-pc flex justify-center">
            <Button onClick={() => alert('test')}>Test</Button>
            <Selector options={['dark', 'light','neon'] } onChange={(value) => console.log(value)}></Selector>
        </div>
    );
};

export default TestPage;