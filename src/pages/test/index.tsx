import { Button, Space } from 'antd'
import { ThemeSelector } from 'features/themeSwitcher';

const TestPage = () => {
    return (
        <div className="m-auto bg-pc flex justify-center">
            <Space>
                <Button type="primary">Test</Button>
                <ThemeSelector/>
            </Space>
        </div>
    );
};

export default TestPage;