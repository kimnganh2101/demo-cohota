import '../Main/Homepage.scss'
import '../Main/footer.scss'
const Footerhp = ()=>{
    return(
        <div className = 'c-nav c-nav--expanded-footer o-contain-container'>
            <div className='c-nav--expanded-footer__supermenu'>
                <div className='c-locale-new-overlay'>

                </div>
                <a
                    id="new_locale_switcher"
                    className="c-locale-new-switcher"
                    href="#"
                    data-locale="en-US"
                    role="button"
                    aria-haspopup="true"
                    data-clog-click=""
                    data-clog-ui-component="inc_footer_nav"
                    data-clog-ui-element="link_locale_picker"
                    data-qa="locale-switcher"
                    >
                    <svg
                        className="c-locale-new-switcher__globe"
                        width="18"
                        height="18"
                        viewBox="0 0 100 100"
                        role="presentation"
                    >
                        <path d="M50.008 5.874c-11.308 0-22.613 4.3-31.219 12.906-17.211 17.211-17.211 45.226 0 62.438 17.211 17.21 45.195 17.21 62.406 0 17.212-17.212 17.243-45.227.032-62.438-8.606-8.606-19.912-12.906-31.22-12.906zm-3.125 6.125h.125v34.969H28.914c.58-10.29 4.095-20.385 10.594-28.157 2.27-2.715 4.757-4.983 7.375-6.812zm6.125 0h.062a38 38 0 0 1 7.407 6.812c6.498 7.772 10.014 17.866 10.593 28.157H53.008v-34.97zm-18.094 2.937c-7.508 8.978-11.557 20.412-12.156 32.032H11.977c.687-8.725 4.343-17.25 11.03-23.938a38.166 38.166 0 0 1 11.907-8.094zm30.219.062a38.176 38.176 0 0 1 11.812 8.063c6.685 6.685 10.369 15.19 11.063 23.906H77.227c-.598-11.59-4.623-23-12.094-31.969zm-53.156 37.97h10.78c.59 11.638 4.638 23.07 12.157 32.062a38.133 38.133 0 0 1-11.875-8.063c-6.7-6.7-10.376-15.258-11.062-24zm16.937 0h18.094V88.03h-.063c-2.644-1.838-5.146-4.135-7.437-6.875-6.512-7.787-10.025-17.876-10.594-28.188zm24.094 0H71.07c-.568 10.31-4.082 20.4-10.593 28.187-2.298 2.747-4.817 5.034-7.47 6.875V52.967zm24.219 0h10.812c-.679 8.741-4.39 17.295-11.094 24A38.07 38.07 0 0 1 65.04 85.06c.01-.011.022-.02.031-.031 7.52-8.992 11.568-20.424 12.157-32.063z" />
                    </svg>
                    <span>
                        <div style={{ verticalAlign: 'inherit' }}>
                        <div style={{ verticalAlign: 'inherit' }}>Thay đổi vùng</div>
                        </div>
                    </span>
                    </a>
                <ul className='c-nav__social_list'>
                <li className="listitem-social">
                    <a
                        data-clog-click=""
                        data-clog-ui-component="inc_footer_exp_nav"
                        data-clog-ui-element="link_social_linkedin_exp_nav"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                        target="_blank"
                        rel="noopener"
                        href="https://www.linkedin.com/company/tiny-spec-inc/"
                        data-qa="linkedin"
                    >
                        <svg
                        width="18"
                        height="18"
                        version="1"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                        role="presentation"
                        >
                        <path
                            d="M1.84613 3.69226C2.86519 3.69226 3.69226 2.86519 3.69226 1.84613C3.69226 0.827067 2.86519 0 1.84613 0C0.827067 0 0 0.827067 0 1.84613C0 2.86519 0.827067 3.69226 1.84613 3.69226ZM0 16V4.92317H3.69226V16H0ZM6.15441 4.92317H9.55991V6.66838H9.60916C10.0829 5.81794 11.2423 4.92317 12.9716 4.92317C16.5666 4.92317 17.2312 7.16068 17.2312 10.0714V16H13.6804V10.7446C13.6804 9.49173 13.6546 7.87821 11.8343 7.87821C9.98578 7.87821 9.70267 9.24311 9.70267 10.6536V16H6.15441V4.92317Z"
                            fill="black"
                        />
                        </svg>
                    </a>
                    </li>
                <li className="listitem-social">
                    <a
                        data-clog-click=""
                        data-clog-ui-component="inc_footer_exp_nav"
                        data-clog-ui-element="link_social_instagram_exp_nav"
                        aria-label="Instagram"
                        title="Instagram"
                        target="_blank"
                        rel="noopener"
                        href="https://www.instagram.com/slackhq/"
                        data-qa="instagram"
                    >
                        <svg
                        width="18"
                        height="18"
                        version="1"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                        role="presentation"
                        >
                        <path
                            d="M9.27777 2.03122C11.5465 2.03122 11.8167 2.03959 12.7132 2.08142C15.0166 2.18661 16.0924 3.27915 16.1975 5.56581C16.2382 6.46231 16.2454 6.73126 16.2454 9C16.2454 11.2711 16.2382 11.5389 16.1975 12.4354C16.0924 14.7185 15.0189 15.8146 12.7132 15.9198C11.8167 15.9604 11.5489 15.9688 9.27777 15.9688C7.00784 15.9688 6.73889 15.9604 5.84239 15.9198C3.53301 15.8134 2.46319 14.7161 2.358 12.4342C2.31736 11.5377 2.30899 11.2699 2.30899 9C2.30899 6.73007 2.31855 6.46112 2.358 5.56462C2.46438 3.27915 3.5366 2.18542 5.84239 2.08023C6.73889 2.03959 7.00784 2.03122 9.27777 2.03122ZM9.27777 0.5C6.96959 0.5 6.68032 0.509563 5.77306 0.550204C2.68671 0.692448 0.970219 2.40536 0.82917 5.49529C0.787334 6.40255 0.777771 6.69062 0.777771 9C0.777771 11.3082 0.787334 11.5975 0.827975 12.5047C0.970219 15.5911 2.68313 17.3076 5.77306 17.4486C6.68032 17.4904 6.96839 17.5 9.27777 17.5C11.586 17.5 11.8752 17.4904 12.7825 17.4486C15.8664 17.3076 17.5865 15.5946 17.7264 12.5047C17.7682 11.5975 17.7778 11.3082 17.7778 9C17.7778 6.69062 17.7682 6.40255 17.7264 5.49529C17.5877 2.41134 15.8736 0.692448 12.7825 0.551399C11.8752 0.509563 11.586 0.5 9.27777 0.5ZM9.27777 4.63585C8.69851 4.62626 8.12313 4.73207 7.58517 4.94712C7.04722 5.16217 6.55745 5.48214 6.14441 5.8884C5.73138 6.29465 5.40334 6.77906 5.17943 7.31338C4.95551 7.8477 4.84019 8.42125 4.84019 9.0006C4.84019 9.57994 4.95551 10.1535 5.17943 10.6878C5.40334 11.2221 5.73138 11.7065 6.14441 12.1128C6.55745 12.5191 7.04722 12.839 7.58517 13.0541C8.12313 13.2691 8.69851 13.3749 9.27777 13.3654C10.4355 13.3654 11.5459 12.9054 12.3645 12.0868C13.1832 11.2681 13.6431 10.1578 13.6431 9C13.6431 7.84224 13.1832 6.73189 12.3645 5.91323C11.5459 5.09457 10.4355 4.63585 9.27777 4.63585ZM9.27777 11.8329C8.52643 11.8329 7.80586 11.5345 7.27458 11.0032C6.74331 10.4719 6.44484 9.75134 6.44484 9C6.44484 8.24866 6.74331 7.52809 7.27458 6.99681C7.80586 6.46553 8.52643 6.16707 9.27777 6.16707C10.0291 6.16707 10.7497 6.46553 11.281 6.99681C11.8122 7.52809 12.1107 8.24866 12.1107 9C12.1107 9.75134 11.8122 10.4719 11.281 11.0032C10.7497 11.5345 10.0291 11.8329 9.27777 11.8329ZM13.8152 3.44171C13.5445 3.44171 13.2849 3.54926 13.0934 3.7407C12.902 3.93214 12.7944 4.19179 12.7944 4.46252C12.7944 4.73326 12.902 4.99291 13.0934 5.18435C13.2849 5.37579 13.5445 5.48334 13.8152 5.48334C14.0798 5.47428 14.3305 5.36283 14.5144 5.17249C14.6983 4.98215 14.8011 4.72781 14.8011 4.46312C14.8011 4.19843 14.6983 3.94409 14.5144 3.75375C14.3305 3.56341 14.0798 3.45196 13.8152 3.44291V3.44171Z"
                            fill="#1D1C1D"
                        />
                        </svg>
                    </a>
                    </li>
                <li className="listitem-social">
                    <a
                        data-clog-click=""
                        data-clog-ui-component="inc_footer_exp_nav"
                        data-clog-ui-element="link_social_facebook_exp_nav"
                        target="_blank"
                        rel="noopener"
                        aria-label="Facebook"
                        title="Facebook"
                        href="https://facebook.com/slackhq"
                        data-qa="facebook"
                    >
                        <svg
                        width="18"
                        height="18"
                        version="1"
                        viewBox="0 0 19 18"
                        xmlns="http://www.w3.org/2000/svg"
                        role="presentation"
                        >
                        <path
                            d="m18.7778 9c0-4.97052-4.0295-9-9.00003-9-4.97052 0-8.999999 4.02948-8.999999 9 0 4.2206 2.905919 7.7623 6.825959 8.735v-5.9846h-1.8558v-2.7504h1.8558v-1.18512c0-3.06324 1.38636-4.48308 4.39377-4.48308.5703 0 1.5542.11196 1.9566.22356v2.493c-.2124-.02232-.5814-.03348-1.0396-.03348-1.4757 0-2.0459.55908-2.0459 2.0124v.97272h2.9397l-.505 2.7504h-2.4347v6.1837c4.4564-.5382 7.9095-4.3326 7.9095-8.9341z"
                            fill="#1d1c1d"
                        />
                        </svg>
                    </a>
                    </li>
                <li className="listitem-social">
                    <a
                        data-clog-click=""
                        data-clog-ui-component="inc_footer_exp_nav"
                        data-clog-ui-element="link_social_x_exp_nav"
                        aria-label="X"
                        title="X"
                        target="_blank"
                        rel="noopener"
                        href="https://twitter.com/slackhq"
                        data-qa="x"
                    >
                        <svg
                        width="18"
                        height="18"
                        version="1"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                        role="presentation"
                        >
                        <path
                            d="M9.70481 6.85148L15.2889 0.5H13.9656L9.11698 6.0149L5.24437 0.5H0.777771L6.63392 8.8395L0.777771 15.5H2.1011L7.22141 9.67608L11.3112 15.5H15.7778L9.70448 6.85148H9.70481ZM7.89233 8.91297L7.29898 8.08255L2.57791 1.47476H4.61046L8.42042 6.80746L9.01377 7.63788L13.9663 14.5696H11.9337L7.89233 8.91329V8.91297Z"
                            fill="#1D1C1D"
                        />
                        </svg>
                    </a>
                    </li>
                <li className="listitem-social">
                    <a
                        data-clog-click=""
                        data-clog-ui-component="inc_footer_exp_nav"
                        data-clog-ui-element="link_social_youtube_exp_nav"
                        aria-label="YouTube"
                        title="YouTube"
                        target="_blank"
                        rel="noopener"
                        href="https://www.youtube.com/channel/UCY3YECgeBcLCzIrFLP4gblw"
                        data-qa="youtube"
                    >
                        <svg
                        version="1"
                        width="18"
                        height="18"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        role="presentation"
                        >
                        <path d="M31.67 9.18s-.312-2.354-1.27-3.39c-1.218-1.358-2.58-1.366-3.206-1.443C22.717 4 16.002 4 16.002 4h-.015s-6.715 0-11.19.347c-.626.077-1.988.085-3.206 1.443C.635 6.826.32 9.18.32 9.18S0 11.94 0 14.7v2.59c0 2.762.32 5.522.32 5.522s.312 2.352 1.27 3.386c1.22 1.358 2.816 1.317 3.528 1.46 2.56.26 10.877.342 10.877.342s6.722-.012 11.2-.355c.624-.08 1.987-.088 3.204-1.446.956-1.036 1.27-3.388 1.27-3.388s.32-2.76.32-5.523V14.7c0-2.76-.32-5.522-.32-5.522z" />
                        <path fill="#FFF" d="M12 10v12l10-6" />
                        </svg>
                    </a>
                    </li>
                <li className="listitem-social">
                    <a
                        data-clog-click=""
                        data-clog-ui-component="inc_footer_exp_nav"
                        data-clog-ui-element="link_social_tiktok_exp_nav"
                        aria-label="TikTok"
                        title="TikTok"
                        target="_blank"
                        rel="noopener"
                        href="https://www.tiktok.com/@slackhq"
                        data-qa="tiktok"
                    >
                        <svg
                        width="18"
                        height="18"
                        version="1"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                        role="presentation"
                        >
                        <path d="M12.9077 3.9075C11.981 3.31052 11.3127 2.35492 11.1039 1.24154C11.059 1.00104 11.034 0.753292 11.034 0.5H8.07685L8.0721 12.2128C8.02249 13.5245 6.93007 14.5773 5.5913 14.5773C5.17496 14.5773 4.78321 14.4746 4.43805 14.295C3.64678 13.8835 3.10532 13.064 3.10532 12.1207C3.10532 10.766 4.2206 9.66372 5.59087 9.66372C5.84672 9.66372 6.09221 9.70551 6.32432 9.77715V6.7935C6.08401 6.76109 5.83981 6.74105 5.59087 6.74105C2.58975 6.74105 0.148209 9.15415 0.148209 12.1207C0.148209 13.9407 1.06805 15.5513 2.47196 16.5252C3.35599 17.1388 4.43158 17.5 5.5913 17.5C8.59242 17.5 11.034 15.0869 11.034 12.1207V6.18116C12.1937 7.00372 13.6149 7.48856 15.1482 7.48856V4.56589C14.3224 4.56589 13.5532 4.32326 12.9077 3.9075Z" fill="#1D1C1D" />
                        </svg>
                    </a>
                    </li>
                </ul>
            </div>
            <div className='c-nav--expanded-footer__menu'>
                <a
                    data-clog-click=""
                    data-clog-ui-component="inc_footer_exp_nav"
                    data-clog-ui-element="link_home_exp_nav"
                    href="https://slack.com/intl/fr-vn/"
                    className="c-slackhash desktop"
                    aria-label="chùng xuống"
                    >
                    <img
                        src="https://a.slack-edge.com/fd21de4/marketing/img/nav/logo.svg"
                        alt="Đóng điều hướng"
                    />
                </a>
                <nav className='c-expanded-footer--wrap'>
                    <ul className='c-extnav-level__0'>
                        <li id="footer_product" className="nav_parent nav_parent_l1">
                        <button 
                            aria-expanded="false" 
                            aria-haspopup="true" 
                            tabIndex="0" 
                            className="dropdown_button" 
                            data-clog-click="" 
                            data-clog-ui-element="btn_product_exp_footer" 
                            data-clog-ui-component="inc_footer_exp_nav"
                        >
                            <span className="nav_parent_label nav_parent_label_l1">Produit</span>
                        </button>

                        <div className="nav_parent_label nav_parent_label_l1 desktop">
                            Sản phẩm
                        </div>

                        <ul className="c-extnav-level__1 align-text">
                            <li id="link_watch_demo_exp_footer" className="nav_link nav_link_l2">
                            <a 
                                href="https://slack.com/intl/fr-vn/demo" 
                                data-clog-click="" 
                                data-clog-ui-element="link_watch_demo_exp_footer" 
                                data-clog-ui-component="inc_footer_exp_nav"
                            >
                                <div className="nav_link_label">
                                <div>Xem cuộc biểu tình</div>
                                </div>
                            </a>
                            </li>

                            <li id="link_pricing_exp_footer" className="nav_link nav_link_l2">
                            <a 
                                href="https://slack.com/intl/fr-vn/pricing" 
                                data-clog-click="" 
                                data-clog-ui-element="link_pricing_exp_footer" 
                                data-clog-ui-component="inc_footer_exp_nav"
                            >
                                <div className="nav_link_label">
                                <div>Giá cả</div>
                                </div>
                            </a>
                            </li>

                            <li id="link_paid_vs_free_exp_footer" className="nav_link nav_link_l2">
                            <a 
                                href="https://slack.com/intl/fr-vn/pricing/paid-vs-free" 
                                data-clog-click="" 
                                data-clog-ui-element="link_paid_vs_free_exp_footer" 
                                data-clog-ui-component="inc_footer_exp_nav"
                            >
                                <div className="nav_link_label">
                                <div>Được trả tiền so với Miễn phí</div>
                                </div>
                            </a>
                            </li>

                            <li id="link_accessibility_exp_footer" className="nav_link nav_link_l2">
                            <a 
                                href="https://slack.com/intl/fr-vn/accessibility" 
                                data-clog-click="" 
                                data-clog-ui-element="link_accessibility_exp_footer" 
                                data-clog-ui-component="inc_footer_exp_nav"
                            >
                                <div className="nav_link_label">
                                <div>Khả năng tiếp cận</div>
                                </div>
                            </a>
                            </li>

                            <li id="link_featured_releases_exp_footer" className="nav_link nav_link_l2">
                            <a 
                                href="https://slack.com/intl/fr-vn/releases" 
                                data-clog-click="" 
                                data-clog-ui-element="link_featured_releases_exp_footer" 
                                data-clog-ui-component="inc_footer_exp_nav"
                            >
                                <div className="nav_link_label">
                                <div>Ấn phẩm được đề xuất</div>
                                </div>
                            </a>
                            </li>

                            <li id="link_changelog_exp_footer" className="nav_link nav_link_l2">
                            <a 
                                href="https://slack.com/intl/fr-vn/changelog" 
                                data-clog-click="" 
                                data-clog-ui-element="link_changelog_exp_footer" 
                                data-clog-ui-component="inc_footer_exp_nav"
                            >
                                <div className="nav_link_label">
                                <div>Nhật ký thay đổi</div>
                                </div>
                            </a>
                            </li>

                            <li id="link_status_exp_footer" className="nav_link nav_link_l2">
                            <a 
                                href="https://slack-status.com/?_gl=1*6cfpp0*_gcl_au*MTg5ODY1ODY3LjE3MDE3MTQ3MTc." 
                                data-clog-click="" 
                                data-clog-ui-element="link_status_exp_footer" 
                                data-clog-ui-component="inc_footer_exp_nav"
                            >
                                <div className="nav_link_label">
                                <div>Trạng thái</div>
                                </div>
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li id="footer_why_slack" className="nav_parent nav_parent_l1 align-text">
                            <button 
                                aria-expanded="false" 
                                aria-haspopup="true" 
                                tabIndex="0" 
                                className="dropdown_button" 
                                data-clog-click="" 
                                data-clog-ui-element="btn_why_slack_exp_footer" 
                                data-clog-ui-component="inc_footer_exp_nav"
                            >
                                <span className="nav_parent_label nav_parent_label_l1">Pourquoi choisir Slack&nbsp;?</span>
                            </button>
                            
                            {/* <div className="nav_parent_label nav_parent_label_l1 desktop">
                                Tại sao chọn Slack?
                            </div>

                            <ul className="c-extnav-level__1">
                                <li id="link_slack_vs_email_exp_footer" className="nav_link nav_link_l2">
                                <a 
                                    href="https://slack.com/intl/fr-vn/why/slack-vs-email" 
                                    data-clog-click="" 
                                    data-clog-ui-element="link_slack_vs_email_exp_footer" 
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>Slack so với Email</div>
                                    </div>
                                </a>
                                </li>

                                <li id="link_enterprise_exp_footer" className="nav_link nav_link_l2">
                                <a 
                                    href="https://slack.com/intl/fr-vn/enterprise" 
                                    data-clog-click="" 
                                    data-clog-ui-element="link_enterprise_exp_footer" 
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>Việc kinh doanh</div>
                                    </div>
                                </a>
                                </li>

                                <li id="link_small_business_exp_footer" className="nav_link nav_link_l2">
                                <a 
                                    href="https://slack.com/intl/fr-vn/solutions/small-business" 
                                    data-clog-click="" 
                                    data-clog-ui-element="link_small_business_exp_footer" 
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>Doanh nghiệp nhỏ</div>
                                    </div>
                                </a>
                                </li>

                                <li id="link_productivity_exp_footer" className="nav_link nav_link_l2">
                                <a 
                                    href="https://slack.com/intl/fr-vn/engage-users" 
                                    data-clog-click="" 
                                    data-clog-ui-element="link_productivity_exp_footer" 
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>Năng suất</div>
                                    </div>
                                </a>
                                </li>

                                <li id="link_task_management_exp_footer" className="nav_link nav_link_l2">
                                <a 
                                    href="https://slack.com/intl/fr-vn/solutions/task-management" 
                                    data-clog-click="" 
                                    data-clog-ui-element="link_task_management_exp_footer" 
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>Quản lý tác vụ</div>
                                    </div>
                                </a>
                                </li>

                                <li id="link_scale_exp_footer" className="nav_link nav_link_l2">
                                <a 
                                    href="https://slack.com/intl/fr-vn/scale" 
                                    data-clog-click="" 
                                    data-clog-ui-element="link_scale_exp_footer" 
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>Khả năng mở rộng</div>
                                    </div>
                                </a>
                                </li>

                                <li id="link_trust_exp_footer" className="nav_link nav_link_l2">
                                <a 
                                    href="https://slack.com/intl/fr-vn/trust" 
                                    data-clog-click="" 
                                    data-clog-ui-element="link_trust_exp_footer" 
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>Lòng tin</div>
                                    </div>
                                </a>
                                </li>
                            </ul> */}
                        </li>
                        <li id="footer_features" className="nav_parent nav_parent_l1 align-text">
                            <button
                                aria-expanded="false"
                                aria-haspopup="true"
                                tabIndex="0"
                                className="dropdown_button"
                                data-clog-click=""
                                data-clog-ui-element="btn_features_exp_footer"
                                data-clog-ui-component="inc_footer_exp_nav"
                            >
                                <span className="nav_parent_label nav_parent_label_l1">Fonctionnalités</span>
                            </button>
                            <div className="nav_parent_label nav_parent_label_l1 desktop">
                                <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>Đặc trưng</font>
                                </font>
                            </div>
                            <ul className="c-extnav-level__1">
                                <li id="link_channels_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/features/channels"
                                    data-clog-click=""
                                    data-clog-ui-element="link_channels_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Kênh</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_slack_connect_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/connect"
                                    data-clog-click=""
                                    data-clog-ui-element="link_slack_connect_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Kết nối lỏng lẻo</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_workflow_builder_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/features/workflow-automation"
                                    data-clog-click=""
                                    data-clog-ui-element="link_workflow_builder_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Trình tạo quy trình làm việc</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_messaging_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/team-chat"
                                    data-clog-click=""
                                    data-clog-ui-element="link_messaging_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Nhắn tin</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_huddles_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/features/huddles"
                                    data-clog-click=""
                                    data-clog-ui-element="link_huddles_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Cuộc gọi nhóm</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_canvas_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/features/canvas"
                                    data-clog-click=""
                                    data-clog-ui-element="link_canvas_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Vải bạt</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_lists_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/features/task-list"
                                    data-clog-click=""
                                    data-clog-ui-element="link_canvas_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Danh sách</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_clips_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/features/clips"
                                    data-clog-click=""
                                    data-clog-ui-element="link_clips_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Đoạn phim</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_search_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/knowledge-sharing"
                                    data-clog-click=""
                                    data-clog-ui-element="link_search_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Để nghiên cứu</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_apps_integrations_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/integrations"
                                    data-clog-click=""
                                    data-clog-ui-element="link_apps_integrations_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Ứng dụng và tích hợp</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_file_sharing_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/document-sharing"
                                    data-clog-click=""
                                    data-clog-ui-element="link_file_sharing_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Chia sẻ tập tin</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_slack_ai_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/features/ai"
                                    data-clog-click=""
                                    data-clog-ui-element="link_slack_ai_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>AI lỏng lẻo</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_security_features_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/trust/security"
                                    data-clog-click=""
                                    data-clog-ui-element="link_security_features_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Bảo vệ</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_enterprise_key_management_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/enterprise-key-management"
                                    data-clog-click=""
                                    data-clog-ui-element="link_enterprise_key_management_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Quản lý khóa mã hóa doanh nghiệp Slack (Slack EKM)</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_slack_atlas_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/atlas"
                                    data-clog-click=""
                                    data-clog-ui-element="link_slack_atlas_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Bản đồ Slack</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_see_all_features_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/features"
                                    data-clog-click=""
                                    data-clog-ui-element="link_see_all_features_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Xem tất cả các tính năng</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                            </ul>
                        </li>
                        <li id="footer_solutions" className="nav_parent nav_parent_l1 align-text">
                            <button
                                aria-expanded="false"
                                aria-haspopup="true"
                                tabIndex="0"
                                className="dropdown_button"
                                data-clog-click=""
                                data-clog-ui-element="btn_solutions_exp_footer"
                                data-clog-ui-component="inc_footer_exp_nav"
                            >
                                <span className="nav_parent_label nav_parent_label_l1">Solutions</span>
                            </button>
                            <div className="nav_parent_label nav_parent_label_l1 desktop">
                                <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>Giải pháp</font>
                                </font>
                            </div>
                            <ul className="c-extnav-level__1">
                                <li id="link_engineering_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/solutions/engineering"
                                    data-clog-click=""
                                    data-clog-ui-element="link_engineering_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Kỹ thuật</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_it_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/solutions/information-technology"
                                    data-clog-click=""
                                    data-clog-ui-element="link_it_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Khoa học máy tính</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_customer_service_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/solutions/customer-service"
                                    data-clog-click=""
                                    data-clog-ui-element="link_customer_service_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Dịch vụ khách hàng</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_sales_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/solutions/sales"
                                    data-clog-click=""
                                    data-clog-ui-element="link_sales_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Việc bán hàng</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_project_management_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/solutions/project-management"
                                    data-clog-click=""
                                    data-clog-ui-element="link_project_management_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Quản lý dự án</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_marketing_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/solutions/marketing"
                                    data-clog-click=""
                                    data-clog-ui-element="link_marketing_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Tiếp thị</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_security_solutions_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/solutions/security"
                                    data-clog-click=""
                                    data-clog-ui-element="link_security_solutions_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Bảo vệ</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_mae_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/solutions/manufacturing"
                                    data-clog-click=""
                                    data-clog-ui-element="link_mae_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Sản xuất, ô tô và năng lượng</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_technology_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/solutions/technology"
                                    data-clog-click=""
                                    data-clog-ui-element="link_technology_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Công nghệ</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_media_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/solutions/media"
                                    data-clog-click=""
                                    data-clog-ui-element="link_media_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Phương tiện truyền thông</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_financial_services_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/solutions/financial-services"
                                    data-clog-click=""
                                    data-clog-ui-element="link_financial_services_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Dịch vụ tài chính</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_retail_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/solutions/retail"
                                    data-clog-click=""
                                    data-clog-ui-element="link_retail_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Bán lẻ</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_public_sector_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/solutions/public-sector"
                                    data-clog-click=""
                                    data-clog-ui-element="link_public_sector_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Khu vực công</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_education_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/solutions/distance-learning"
                                    data-clog-click=""
                                    data-clog-ui-element="link_education_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Giáo dục</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_health_life_sciences_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/solutions/healthcare"
                                    data-clog-click=""
                                    data-clog-ui-element="link_health_life_sciences_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Khoa học sức khỏe và đời sống</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_see_all_solutions_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/solutions"
                                    data-clog-click=""
                                    data-clog-ui-element="link_see_all_solutions_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Khám phá tất cả các giải pháp</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li id="footer_resources" className="nav_parent nav_parent_l1 align-text">
                    <button
                        aria-expanded="false"
                        aria-haspopup="true"
                        tabIndex="0"
                        className="dropdown_button"
                        data-clog-click=""
                        data-clog-ui-element="btn_resources_exp_footer"
                        data-clog-ui-component="inc_footer_exp_nav"
                    >
                        <span className="nav_parent_label nav_parent_label_l1">Ressources</span>
                    </button>
                    <div className="nav_parent_label nav_parent_label_l1 desktop">
                        <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Tài nguyên</font>
                        </font>
                    </div>
                    <ul className="c-extnav-level__1">
                        <li id="link_help_center_exp_footer" className="nav_link nav_link_l2">
                        <a
                            href="https://slack.com/intl/fr-vn/help"
                            data-clog-click=""
                            data-clog-ui-element="link_help_center_exp_footer"
                            data-clog-ui-component="inc_footer_exp_nav"
                        >
                            <div className="nav_link_label">
                            <div>
                                <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>Trung tâm trợ giúp</font>
                                </font>
                            </div>
                            </div>
                        </a>
                        </li>
                        <li id="link_whats_new_exp_footer" className="nav_link nav_link_l2">
                        <a
                            href="https://slack.com/intl/fr-vn/releases"
                            data-clog-click=""
                            data-clog-ui-element="link_whats_new_exp_footer"
                            data-clog-ui-component="inc_footer_exp_nav"
                        >
                            <div className="nav_link_label">
                            <div>
                                <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>Có gì mới</font>
                                </font>
                            </div>
                            </div>
                        </a>
                        </li>
                        <li id="link_resources_library_exp_footer" className="nav_link nav_link_l2">
                        <a
                            href="https://slack.com/intl/fr-vn/resources"
                            data-clog-click=""
                            data-clog-ui-element="link_resources_library_exp_footer"
                            data-clog-ui-component="inc_footer_exp_nav"
                        >
                            <div className="nav_link_label">
                            <div>
                                <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>Thư viện tài nguyên</font>
                                </font>
                            </div>
                            </div>
                        </a>
                        </li>
                        <li id="link_slack_blog_footer" className="nav_link nav_link_l2">
                        <a
                            href="https://slack.com/intl/fr-vn/blog"
                            data-clog-click=""
                            data-clog-ui-element="link_slack_blog_footer"
                            data-clog-ui-component="inc_footer_exp_nav"
                        >
                            <div className="nav_link_label">
                            <div>
                                <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>Blog lười biếng</font>
                                </font>
                            </div>
                            </div>
                        </a>
                        </li>
                        <li id="link_community_exp_footer" className="nav_link nav_link_l2">
                        <a
                            href="https://slack.com/intl/fr-vn/community"
                            data-clog-click=""
                            data-clog-ui-element="link_community_exp_footer"
                            data-clog-ui-component="inc_footer_exp_nav"
                        >
                            <div className="nav_link_label">
                            <div>
                                <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>Cộng đồng</font>
                                </font>
                            </div>
                            </div>
                        </a>
                        </li>
                        <li id="link_customer_stories_exp_footer" className="nav_link nav_link_l2">
                        <a
                            href="https://slack.com/intl/fr-vn/customer-stories"
                            data-clog-click=""
                            data-clog-ui-element="link_customer_stories_exp_footer"
                            data-clog-ui-component="inc_footer_exp_nav"
                        >
                            <div className="nav_link_label">
                            <div>
                                <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>Lời chứng thực của khách hàng</font>
                                </font>
                            </div>
                            </div>
                        </a>
                        </li>
                        <li id="link_events_exp_footer" className="nav_link nav_link_l2">
                        <a
                            href="https://slack.com/intl/fr-vn/events"
                            data-clog-click=""
                            data-clog-ui-element="link_events_exp_footer"
                            data-clog-ui-component="inc_footer_exp_nav"
                        >
                            <div className="nav_link_label">
                            <div>
                                <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>Sự kiện</font>
                                </font>
                            </div>
                            </div>
                        </a>
                        </li>
                        <li id="link_developers_exp_footer" className="nav_link nav_link_l2">
                        <a
                            href="https://api.slack.com/?_gl=1*618lju*_gcl_au*MTg5ODY1ODY3LjE3MDE3MTQ3MTc."
                            data-clog-click=""
                            data-clog-ui-element="link_developers_exp_footer"
                            data-clog-ui-component="inc_footer_exp_nav"
                        >
                            <div className="nav_link_label">
                            <div>
                                <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>Nhà phát triển</font>
                                </font>
                            </div>
                            </div>
                        </a>
                        </li>
                        <li id="link_partners_exp_footer" className="nav_link nav_link_l2">
                        <a
                            href="https://slack.com/intl/fr-vn/partners"
                            data-clog-click=""
                            data-clog-ui-element="link_partners_exp_footer"
                            data-clog-ui-component="inc_footer_exp_nav"
                        >
                            <div className="nav_link_label">
                            <div>
                                <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>Đối tác</font>
                                </font>
                            </div>
                            </div>
                        </a>
                        </li>
                        <li id="link_partner_offers_exp_footer" className="nav_link nav_link_l2">
                        <a
                            href="https://slack.com/intl/fr-vn/partner-offers"
                            data-clog-click=""
                            data-clog-ui-element="link_partner_offers_exp_footer"
                            data-clog-ui-component="inc_footer_exp_nav"
                        >
                            <div className="nav_link_label">
                            <div>
                                <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>Ưu đãi của đối tác</font>
                                </font>
                            </div>
                            </div>
                        </a>
                        </li>
                        <li id="link_app_directory_exp_footer" className="nav_link nav_link_l2">
                        <a
                            href="https://slack.com/marketplace?_gl=1*1ncbb8f*_gcl_au*MTg5ODY1ODY3LjE3MDE3MTQ3MTc."
                            data-clog-click=""
                            data-clog-ui-element="link_app_directory_exp_footer"
                            data-clog-ui-component="inc_footer_exp_nav"
                        >
                            <div className="nav_link_label">
                            <div>
                                <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>Thị trường Slack</font>
                                </font>
                            </div>
                            </div>
                        </a>
                        </li>
                        <li id="link_slack_certified_exp_footer" className="nav_link nav_link_l2">
                        <a
                            href="https://slackcertified.com/?_gl=1*1ncbb8f*_gcl_au*MTg5ODY1ODY3LjE3MDE3MTQ3MTc."
                            data-clog-click=""
                            data-clog-ui-element="link_slack_certified_exp_footer"
                            data-clog-ui-component="inc_footer_exp_nav"
                        >
                            <div className="nav_link_label">
                            <div>
                                <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>Chứng nhận Slack</font>
                                </font>
                            </div>
                            </div>
                        </a>
                        </li>
                    </ul>
                        </li>
                        <li id="footer_company" className="nav_parent nav_parent_l1 align-text">
                            <button
                                aria-expanded="false"
                                aria-haspopup="true"
                                tabIndex="0"
                                className="dropdown_button"
                                data-clog-click=""
                                data-clog-ui-element="btn_company_exp_footer"
                                data-clog-ui-component="inc_footer_exp_nav"
                            >
                                <span className="nav_parent_label nav_parent_label_l1">Entreprise</span>
                            </button>
                            <div className="nav_parent_label nav_parent_label_l1 desktop">
                                <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>Việc kinh doanh</font>
                                </font>
                            </div>
                            <ul className="c-extnav-level__1">
                                <li id="link_about_us_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/about"
                                    data-clog-click=""
                                    data-clog-ui-element="link_about_us_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Về chúng tôi</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_news_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/blog/news"
                                    data-clog-click=""
                                    data-clog-ui-element="link_news_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Tin tức</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_media_kit_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/media-kit"
                                    data-clog-click=""
                                    data-clog-ui-element="link_media_kit_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Bộ báo chí</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_brand_center_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://brand.slackhq.com/"
                                    data-clog-click=""
                                    data-clog-ui-element="link_brand_center_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Trung tâm thương hiệu</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_careers_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/careers"
                                    data-clog-click=""
                                    data-clog-ui-element="link_careers_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Việc làm</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_swag_store_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://www.salesforcestore.com/Slack-C124.aspx"
                                    data-clog-click=""
                                    data-clog-ui-element="link_swag_store_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Cửa hàng Slack</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_engineering_blog_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.engineering/"
                                    data-clog-click=""
                                    data-clog-ui-element="link_engineering_blog_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Blog kỹ sư</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_design_blog_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.design/"
                                    data-clog-click=""
                                    data-clog-ui-element="link_design_blog_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>blog thiết kế</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                                <li id="link_contact_us_exp_footer" className="nav_link nav_link_l2">
                                <a
                                    href="https://slack.com/intl/fr-vn/help/requests/new"
                                    data-clog-click=""
                                    data-clog-ui-element="link_contact_us_exp_footer"
                                    data-clog-ui-component="inc_footer_exp_nav"
                                >
                                    <div className="nav_link_label">
                                    <div>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Liên hệ với chúng tôi</font>
                                        </font>
                                    </div>
                                    </div>
                                </a>
                                </li>
                            </ul>
                            </li>






                    </ul>

                </nav>


            </div>



        </div>
    )

}
export default Footerhp;