import React from 'react';

export interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>((props, ref) => {
    const { children, ...rest } = props;

    return (
        <div ref={ref} {...rest}>
            {children}
        </div>
    );
});
