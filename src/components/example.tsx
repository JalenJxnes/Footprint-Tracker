import '../app/global.css';

export default function Example() {
    return (
        <div className="container">
            <h1 className="title">
                Example
            </h1>

            <p className='exampleParagraph'>
                This is an example paragraph. It is styled with Tailwind CSS or regular CSS. You can use the global.css file to add global styles. If you want to add styles only for one component, you can add a CSS file with the same name as the component. For example, if you have a component called example.tsx, you can add a file called example.css and it will only be applied to that component.
            </p>

            <p className='exampleParagraph'>
                This is another example paragraph. You can add as many as you want. This is all stored inside the example component. The component name is then used in the page.tsx file to display the component.
            </p>

            <h2>
                Have fun developing! If you have any questions, feel free to ask in the Discord server.
            </h2>
        </div>
    )
}