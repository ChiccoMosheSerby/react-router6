import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider,QueryClient } from "react-query";
import { useThemeContext } from "./contexts/ThemeContext";
import Nav from "./components/Nav/Nav";
import Counter from "./components/Counter";
import AppRoutes from "./components/AppRoutes";
import { StyledApp } from "./App.styles";
const queryClient = new QueryClient();

function App() {
  const themeContext = useThemeContext();

  return (
    <StyledApp style={{ ...themeContext.styles }}>
      <QueryClientProvider client={queryClient}>
        <div className="main">
          <BrowserRouter>
            <Nav />
            <Counter />
            <AppRoutes />
          </BrowserRouter>
        </div>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
      </QueryClientProvider>
    </StyledApp>
  );
}

export default App;
