import { Card, Grid, Layout } from "antd";
import { FC } from "react";
import auth_background from '/images/auth_background.png';
import styles from './auth-page.module.scss';
import { Outlet } from "react-router-dom";
import { RequireNotAuthState } from "../../helpers/RequireNotAuthState";
import { Loader } from "@components/UI/Loader/Loader";
import { useAppSelector } from "@hooks/typed-react-redux-hooks";
const { useBreakpoint } = Grid;



export const AuthPage: FC = () => {
    const { isLoading } = useAppSelector(s => s.app);
    const screens = useBreakpoint();

    return <RequireNotAuthState>
        {isLoading && <Loader />}
        <div style={{ maxWidth: "1440px", margin: "0 auto", position: "relative" }}>
            <Layout style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: "100dvh",
                backgroundPosition: "center",
                backgroundImage: `url(${auth_background})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: 1
            }}>
                <div className={styles.blur} />
                <Card
                    bodyStyle={{ padding: (screens?.xs) ? "0px" : "none", textAlign: 'center' }}
                    style={{
                        margin: (screens?.xs) ? "0px 16px" : "none",
                        borderRadius: '2px',
                        zIndex: isLoading ? 1 : 12,
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '48px',
                        padding: (screens?.xs) ? "32px 16px" : '64px 32px',
                        width: (screens?.xs) ? "auto" : '539px',
                    }}
                >
                    <Outlet />
                </Card>
            </Layout>
        </div>
    </RequireNotAuthState>
};

