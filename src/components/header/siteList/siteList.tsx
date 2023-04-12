import './siteList.css'

export default function SiteList() {
    return (<>
            <div className="site_menu trans">
                <ul className="site_list">
                    <li><a href="http://www.douzone.com" rel="noopener noreferrer" target="_blank">더존ICT그룹</a></li>
                    <li><a href="http://www.douzonerp.com/" rel="noopener noreferrer" target="_blank">ERP10</a></li>
                    <li>
                        <a href="https://www.douzonemall.co.kr" rel="noopener noreferrer" target="_blank">쇼핑</a>
                        <ul className="shopping_sub_menu">
                            <li><a href="https://www.douzonemall.co.kr/goods/goods_list.php?cateCd=034" target="_blank">강아지숲
                                입장권 구매</a></li>
                            <li><a href="https://www.douzonemall.co.kr/" target="_blank">사무용품 구매</a></li>
                            <li><a href="https://law.douzoneedu.co.kr" target="_blank">법정의무교육</a></li>
                        </ul>
                    </li>
                    <li><a href="/" rel="noopener noreferrer" target="_self" className="on">ERP 온라인 고객센터</a></li>
                </ul>

                <div className="top_btn">
                    <a id="btnTopLogIn">로그인</a>
                    <a id="btnTopSignUp">회원가입</a>
                </div>


            </div>
        </>
        )
}
