import './styles/index.scss';
import { useTheme } from "./providers/ThemeProviders";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { Suspense } from 'react';


export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <NavBar />
                <div className='content-page'>
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}