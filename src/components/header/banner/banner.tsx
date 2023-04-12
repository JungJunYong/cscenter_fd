import './banner.css'

export default function HeaderBanner() {
    return (<>
            <div id="mainNotice" className="today_ban_bx">
                <div className="bg_img">
                    <div className="con_bx">
                        <div className="banner_img_guide"></div>
                        <div className="banner_title_box">
                            <div className="banner_title">ERP 온라인 고객지원센터 <span
                                className="banner_title_highlight">이용가이드</span></div>
                            <div className="banner_sub_title">바로가기를 클릭하여 ERP 온라인 고객지원센터의 기능을 확인해주세요.</div>

                        </div>
                        <div className="btn_all">
                            <div className="banner_title_box small">
                                <div className="banner_list_title"><span
                                    className="banner_title_highlight mg-r-3">01</span>회원가입 절차
                                </div>
                                <a className="btn_ban_01" >회원가입
                                    신규회원 가이드 바로가기</a>
                            </div>
                            <div className="banner_title_box small">
                                <div className="banner_list_title"><span
                                    className="banner_title_highlight mg-r-3">02</span>온라인 문의 방법
                                </div>
                                <a className="btn_ban_03" >온라인
                                    문의방법 바로가기</a>
                            </div>
                            <div className="banner_title_box small">
                                <div className="banner_list_title"><span
                                    className="banner_title_highlight mg-r-3">03</span>상세 기능 활용법
                                </div>
                                <a className="btn_ban_04">상세기능활용법
                                    바로가기</a>
                            </div>
                            <div className="banner_title_box small">
                                <div className="banner_list_title"><span
                                    className="banner_title_highlight mg-r-3">04</span>그 외 기능 활용법
                                </div>
                                <a className="btn_ban_05" >그외 기능 활용법
                                    바로가기</a>
                            </div>
                        </div>
                        <div className="today_bx">
                            <input type="checkbox" id="today_ban"/>
                            <label htmlFor="today_ban">오늘 하루 보지 않기</label>
                            <a className="btn_today_close">창닫기</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
}
