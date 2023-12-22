# Assignment 10 

## Explore all the ways of writing css.
 1. Inline styles
 2. Internal/ embedded styles: using <style>
 3. External styles: using <link>
 4. Using styled components
 5. Using sass and scss: sass adds some superpowers that makes writing css more easy.
 6. Using libraries and frameworks like materialUI, bootstrap, ant design, chakra UI
 7. Tailwind css (css framework)

## How do we configure tailwind?
 Step1: Opt for framework guides and choose parcel bcz our project is using parcel.
 Step2: Install tailwind css and postcss
 Step3: Config postcss: create a .postcssrc file in project root and add tailwindcss and autoprefixer to your postcss.config.js file
 Step4: Add the paths to all ofemplate files in your tailwind.config.js file in content. It is basically list of all files where tailwind can be use.
 Step5: Add the tailwind directives for each of Tailwind’s layers to your main CSS file. 
 Step6: Start build process and now we are ready to use tailwind.

## In tailwind.config.js what does all the keys mean (content, theme, extend, plugins)?
 1.Content: In this section we configure the paths to all of the files that can contain tailwind class names.
 e.g.,  /** @type {import('tailwindcss').Config} */
        module.exports = {
            content: [
                './pages/**/*.{html,js}',
                './components/**/*.{html,js}',
            ],
        }
 2.Theme: In this section we define anything related to the visual design of our site like our color palette, fonts, border sizes, type scale,etc. 
 e.g.,  /** @type {import('tailwindcss').Config} */
        module.exports = {
            theme: {
                colors: {
                'blue': '#1fb6ff',
                'gray': '#8492a6',
                'gray-light': '#d3dce6',
                },
                fontFamily: {
                sans: ['Graphik', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
                },
                extend: {
                spacing: {
                    '8xl': '96rem',
                    '9xl': '128rem',
                },
                borderRadius: {
                    '4xl': '2rem',
                }
                }
            }
        }
 3.Plugins: In this we write plugins that tailwind can use to generate extra utilities, components, base styles, or custom variants.
 e.g.,  /** @type {import('tailwindcss').Config} */
        module.exports = {
            plugins: [
                require('@tailwindcss/forms'),
                require('@tailwindcss/aspect-ratio'),
                require('@tailwindcss/typography'),
                require('tailwindcss-children'),
            ],
        }

## Why do we have .postcssrc file?
 It is a config file for postcss which is a tool for transforming styles with js plugins. It allows us to set up configuration options for PostCSS and its plugins in a centralized manner.
 Tailwind CSS utilizes PostCSS plugins to generate utility classes, optimize styles, and handle other transformations.

## styled-components
It is a css-in-js library used for styling react components.

Step1: Install styled components
       npm install styled-components
Step2: Import 'styled fn' to create styled components
       e.g., const StyledDiv = styled.div`
                color: blue;
                font-size: 18px;
             `;
Step3: After designing styled components we can use it just like any other react component
       e.g.,import React from 'react';
            const MyComponent = () => {
                return (
                    <div>
                    <StyledDiv>This is a styled div.</StyledDiv>
                    </div>
                );
            };
            export default MyComponent;

We can also create dynamic styling using props with styled components.
e.g., const StyledButton = styled.button`
      background-color: ${(props) => (props.primary ? 'blue' : 'gray')};
      color: white;
      padding: 10px;
      cursor: pointer;
      `;

    const MyComponent = () => {
        return (
            <div>
                <StyledButton primary>Primary Button</StyledButton>
            </div>
        );
    };

We can define global styles using createGlobalStyle.
e.g., import { createGlobalStyle } from 'styled-components';
      const GlobalStyle = createGlobalStyle`
        body {
            background-color: #f0f0f0;
        }
      `;

Styled components also support nested styles for styling nested elements
e.g.,   const StyledContainer = styled.div`
            padding: 20px;
            h1 {
                color: blue;
            }

            p {
                font-size: 16px;
            }
        `;

        const MyComponent = () => {
            return (
                <StyledContainer>
                    <h1>Title</h1>
                    <p>Paragraph content</p>
                </StyledContainer>
            );
        };
