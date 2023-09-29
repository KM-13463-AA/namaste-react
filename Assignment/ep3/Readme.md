# Assignment3

 ## What is JSX

 It is a syntax extension for js. It a html-like synatx used to create elements without using React.createElement.
 Jsx code is transpiled to react element.


 ## Superpowers of jsx

 -> WE can embed any js expression using curly braces in jsx.
 -> We can use it to avoid  XSS (cross-site-scripting) attacks as react dom escapes embedded values before rendering them.
 -> We can use '' or ""  for string attribute or {} for expression as attribute.

 ## {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent><TitleComponent />}

 -> {TitleComponent}: In this TitleComponent is a javascript expression or a variable which can be put in {} to use inside jsx. The {} can embed a javascript  expression or a variable inside it.
 -> <TitleComponent/> : This TitleComponent a function that is returning a JSX value.
 -> <TitleComponent></TitleComponent> : This is same as <TitleComponent /> But there is one difference, in <TitleComponent></TitleComponent> we can include the child components.E.g.,
        <TitleComponent>
            <ChildComponent />
            Anjali
        </TitleComponent>