import React from 'react';
import ReactDOM from 'react-dom/client';
import './main-page.css';
const App = () => {
    return (
        <div className="ewhaian">
            <Header />
        </div>
    );
};

const MainContent = () => {
    return (
        <div className="main-content">
            <Login />
            <Banner />
        </div>
    );
};
//헤더 부분: 이화이언 로고, 메뉴창
const Header = () => {
    return (
        <nav className='heads'>
            <div className='logo'>
                <img className='img' src= "https://ifh.cc/g/zFqpxT.png"></img>
            </div>
            <nav className='menu'> 
                <li className='menu-item'>이화이언</li>
                <li className='menu-item'>라이프</li>
                <li className='menu-item'>캠퍼스</li>
                <li className='menu-item'>이벤트</li>
                <li className='menu-item'>콘텐츠</li>
            </nav>
            
        </nav>
    )
}
//로그인
const Login = () => {
    return(
        <div className='login'>
            <div className='login1'>
                <div className='login-inputs'>
                    <input type="text" className="log-in" placeholder="아이디" ></input>
                    <input type="text "className="log-in" placeholder="비밀번호" ></input>
                </div>
                <div className='remem-or-save'>
                    <input type="checkbox" /> 아이디 기억
                    <input type="checkbox" /> 로그인 유지
                </div>
                <div className='login-go'>
                    <button>로그인</button>
                </div>
            </div>
            <div className='login2'>
                <div className='login2-butt'>
                    <button className='new-comeon' type="button">회원가입</button>
                    <button className='search' type="button">아이디/비밀번호 찾기</button>
                </div>
                <div className='login2-butt'>
                    <button className='error' type="button">사이트 오류 신고</button>
                </div>
            </div>
        </div>
    )
}
//배너: 25학번 새내기 인증방법
const Banner = () => {
    return (
        <div className='banner-image'>
            <img className='imgs' src="ewhain-mainpage\src\main-page\ewhain-25.png" />
            <img className='imgs' src="ewhain-mainpage\src\main-page\ewhain-community.png" />
        </div>
            
    )
}
const Main = () => {
    return (
        <div>  
        </div>
    );
};


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
    <>
        <App />
        <MainContent />
    </>
);
export default Main;
