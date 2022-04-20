import { NextPage } from 'next';
import { MyComponent } from '@company/ui-core/src';

const IndexPage: NextPage = () => (
    <div>
        <h1>Hello from the Store site!</h1>
        <MyComponent>Custom component from @company/ui-core</MyComponent>
    </div>
);

export default IndexPage;
