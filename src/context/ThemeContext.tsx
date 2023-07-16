import { createContext } from 'react';

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;
// const ThemeContextProvider = (children:any) => {

//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     const retrievedTheme = localStorage.getItem('theme');
//     if (retrievedTheme === 'dark') {
//       toggleTheme();
//     }
//   }, []);

//   const toggleTheme = () => {
//     if(theme === 'light') {
//       document.documentElement.setAttribute('data-theme', 'dark');
//       setTheme('dark');
//     } else {
//       document.documentElement.setAttribute('data-theme', 'light');
//       setTheme('light');
//     }
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

export default ThemeContext;