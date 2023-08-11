import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps) => (
    <div className={classNames(cls.NavBar, {}, [className])}>
        <div className={cls.links}>
            <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>
                Главная
            </AppLink>
            <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                О нас
            </AppLink>
        </div>
    </div>
);
