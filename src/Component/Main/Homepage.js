
 import '../Main/Homepage.scss'

let img = ['https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-airbnb-small@2x.png',
            'https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nasa-small@2x.png',
            'https://a.slack-edge.com/9df734f/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-uber-small@2x.png',
            'https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-target-small@2x.png',
            'https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nyt-small@2x.png',
            'https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-etsy-small@2x.png'
]
const contentStyle = {
    fontFamily: 'Tiempo',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#1D1D1D',
    fontSize: '2.5rem',
    marginBottom: '37px'
    
  };


const Homepage = () =>{

    return(
       
        <div className="Homepage-container">
            <section className='section-billboard background-white '  >
                <div className='o-contain-container'>
                    <div className='flex-column'>
                    <h1 className="u-text--center u-margin-top--flush">
                        <span>Xây dựng các khóa học độc đáo theo cách của bạn </span>
                        {/* <span className="u-text--plum">Tối ưu hóa cho năng suất.</span> */}
                        </h1>

                        <div className="c-cta c-cta--signup u-text--center">
                                <a
                                    href="https://cohota.com/"
                                    className="c-button v--primary"
                                    data-gtm-click="SignUp"
                                    data-clog-ui-element="link_create"
                                    data-clog-ui-component="inc_cta_signup"
                                    data-qa="cta_get_started"
                                    data-clog-click=""
                                >
                                    Để thử
                                </a>
                                <p className="u-margin-top--medium u-margin-bottom--flush">
                                    <strong>Bạn có thể dùng thử Cohota miễn phí</strong> bao lâu tùy thích
                                </p>
                            </div>

                    <section className="o-section o-section--feature-companies v--borderless u-padding-top--large u-padding-bottom--flush">
                        <div className="o-content-container u-text--center v--narrow">
                            <ul className="o-section--feature-companies__logos" data-js-name="logo_bar">
                            <li className="c-logo-bar__item">
                                <img
                                src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-airbnb-small.png"
                                srcSet="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-airbnb-small.png 1x, https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-airbnb-small@2x.png 2x"
                                alt="Airbnb"
                                height="27"
                                width="84"
                                loading="eager"
                                fetchPriority="high"
                                />
                            </li>
                            <li className="c-logo-bar__item">
                                <img
                                src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nasa-small.png"
                                srcSet="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nasa-small.png 1x, https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nasa-small@2x.png 2x"
                                alt="NASA"
                                height="27"
                                width="51"
                                loading="eager"
                                fetchPriority="high"
                                />
                            </li>
                            <li className="c-logo-bar__item">
                                <img
                                src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-uber-small.png"
                                srcSet="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-uber-small.png 1x, https://a.slack-edge.com/9df734f/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-uber-small@2x.png 2x"
                                alt="Uber"
                                height="27"
                                width="54"
                                loading="eager"
                                fetchPriority="high"
                                />
                            </li>
                            <li className="c-logo-bar__item">
                                <img
                                src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-target-small.png"
                                srcSet="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-target-small.png 1x, https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-target-small@2x.png 2x"
                                alt="Mục tiêu"
                                height="27"
                                width="38"
                                loading="eager"
                                fetchPriority="high"
                                />
                            </li>
                            <li className="c-logo-bar__item">
                                <img
                                src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nyt-small.png"
                                srcSet="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nyt-small.png 1x, https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nyt-small@2x.png 2x"
                                alt="Thời báo New York"
                                height="27"
                                width="178"
                                loading="eager"
                                fetchPriority="high"
                                />
                            </li>
                            <li className="c-logo-bar__item">
                                <img
                                src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-etsy-small.png"
                                srcSet="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-etsy-small.png 1x, https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-etsy-small@2x.png 2x"
                                alt="Etsy"
                                height="27"
                                width="58"
                                loading="eager"
                                fetchPriority="high"
                                />
                            </li>
                            </ul>
                        </div>
                        </section>

                    <div className="video-contain o-hero__illustration o-content-container "   >
                         <video height="544" width="900" className='u-box-shadow-simple u-margin-top--large header-video'  autoPlay loop muted poster="https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/static/hero@2x.fr-FR.jpg">
                            <source src="https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/animation/hero@2x.fr-FR.webm" type="video/webm"></source>
                            <source src="https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/animation/hero@2x.fr-FR.mp4" type="video/mp4"></source>
                        </video> 
                        {/* <div data-lity="" className="col-lg-6 col-md-6 col-sm-12 col-xs-12 video-container" data-lity-target="https://youtu.be/5oeq2z1abNw">
                            <button type="button" className="video-button"></button>
                            </div> */}
                            {/* <button type="button" className="video-button"></button> */}


                    </div>

                    </div>
                    
                </div>
            </section>
            <section className='o-section u-background--horchata'>
                <div className='o-contain-container u-full-width two-column align-center'>
                    
                    <div className="video" >
                        <video height="544" width="100%"  autoPlay loop muted className='video w-full h-screen relative'>
                            <source src="https://a.slack-edge.com/d299b34/marketing/img/homepage/e2e-prospects/animations/webm/speed.fr-FR.webm" type="video/webm"/>
                            <source src="https://a.slack-edge.com/d299b34/marketing/img/homepage/e2e-prospects/animations/mp4/speed.fr-FR.mp4" type="video/mp4" class=""></source>
                        </video>
                    </div>
                    <div className='section-copy align-text  '>
                        <h2 className="display-as-h1 v--intl u-margin-top--flush">
                            <span style={{ verticalAlign: 'inherit' }}>
                            Xây dựng các khóa học độc đáo theo cách của bạn
                            </span>
                            </h2>
                            <p class="o-section--feature__copy u-margin-bottom--medium">Dạy học trực tuyến, Huấn luyện nội bộ, Trường học thông minh, các thầy cô ứng dụng công nghệ để dạy học kết hợp, cho bài tập về nhà, tương tác với các lớp học, với phụ huynh, học sinh tập trung tại một nơi với công nghệ số một từ Mỹ.

</p>

                    <a href="https://cohota.com/" class="o-section--feature__link u-hide-arrow-on-intl" data-clog-click="" data-clog-ui-element="link_integrations" target='blank'>Tìm hiểu về kênh</a>

                    
                    </div>

                    

                </div>


            </section>
            <section className='o-section u-background--horchata'>
                <div className='o-contain-container two-column u-full-width align-center  v-inverse'>
                    
                    <div className="u-hide-on-mobile u-justify-self--end " >
                        <video height="544" width="100%"  autoPlay loop muted className='video w-full h-screen relative'>
                        <source src="https://a.slack-edge.com/ec3a92a/marketing/img/homepage/true-prospects/animations/webm/ia4-flexibility.fr-FR.webm" type="video/webm"/>
                        <source src="https://a.slack-edge.com/ec3a92a/marketing/img/homepage/true-prospects/animations/webm/ia4-flexibility.fr-FR.webm" type="video/mp4"/>
                        </video>
                    </div>
                    <div className='section-copy align-text  '>
                    <h2 class=" v--intl margin-top-flush " style={contentStyle} >MOOC & Website giới thiệu khoá học</h2>
                    <p class="o-section--feature__copy u-margin-bottom--medium">Mở lớp học ra thế giới trong một phút! Điều này rất hiệu quả cho doanh nghiệp, trường hay các đơn vị kinh doanh khoá học trực tuyến</p>
                    <a href="https://themes.cohota.com/" class="o-section--feature__link u-hide-arrow-on-intl" data-clog-click="" data-clog-ui-element="link_integrations" target='blank'>Cohota cho MOOC</a>

                    
                    </div>

                    

                </div>
            </section>
            <section className='o-section u-background--horchata'>
                <div className='o-contain-container u-full-width two-column align-center'>
                    
                    <div className="video" >
                        <video height="544" width="100%"  autoPlay loop muted className='video w-full h-screen relative'>
                        <source src="https://a.slack-edge.com/d299b34/marketing/img/homepage/e2e-prospects/animations/webm/connectedness.fr-FR.webm" type="video/webm"/>
                        <source src="https://a.slack-edge.com/d299b34/marketing/img/homepage/e2e-prospects/animations/mp4/connectedness.fr-FR.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div className='section-copy align-text  '>
                    <h2 class="display-as-h1 v--intl argin-top-flus ">Lớp học ảo</h2>
                    <p class="o-section--feature__copy u-margin-bottom--medium">Biến hội nghị trực tuyến trở thành lớp học với công cụ giảng dạy và cộng tác trên web</p>
                    <a href="https://bbb.conghoctap.com/" class="o-section--feature__link u-hide-arrow-on-intl" data-clog-click="" data-clog-ui-element="link_integrations" target='blank'>Dùng thử dịch vụ miễn phí</a>

                    
                    </div>

                    

                </div>


            </section>
            <section className='o-section padding-bottom-large relative-position'>
                <div className='o-contain-container'>
                <h3 class="display-as-h1 u-text--center u-i18n-max-width--48rem">
                    <div >Các nhóm thuộc mọi quy mô đều tin tưởng Cohota</div>
                </h3>
                <p class="u-text--center u-i18n-max-width--48rem">
                    <div >Cohota được triển khai một cách an toàn để thúc đẩy sự cộng tác trong các công ty lớn nhất thế giới.</div>
                </p>
                <div class="u-margin-bottom--xx-large u-margin-top--medium u-text--center">
                    <a href="https://slack.com/intl/fr-vn/enterprise" className="c-button v--primary" >
                        <div >Khám phá dành cho doanh nghiệp</div>
                    </a>
                    <a href="https://slack.com/intl/fr-vn/contact-sales?geocode=fr-vnamp;from_home=1" className="c-button v--secondary" >
                    <div >Liên hệ với nhóm của chúng tôi</div>
                    </a>
                </div>
                <ul className="c-stat-container u-padding-top--large">
                    <li className="c-stat">
                        <p>
                        <span className="c-stat__number">
                            <div style={{ verticalAlign: 'inherit' }}>85%</div>
                        </span>
                        </p>
                        <p className="c-stat__copy" aria-describedby="stat_description">
                        <div style={{ verticalAlign: 'inherit' }}>người dùng nói rằng Slack đã cải thiện khả năng giao tiếp</div>
                        <sup>
                            <div style={{ verticalAlign: 'inherit' }}>*</div>
                        </sup>
                        <span className="u-visually-hidden" id="stat_description">
                            <div style={{ verticalAlign: 'inherit' }}>
                            Trung bình có trọng số. Dựa trên 2.707 phản hồi từ người dùng Slack ở Hoa Kỳ, Anh, Úc và Canada với tỷ lệ sai số ±2% ở khoảng tin cậy 95% (tháng 12 năm 2021).
                            </div>
                        </span>
                        </p>
                    </li>

                    <li className="c-stat">
                        <p>
                        <span className="c-stat__number">
                            <div style={{ verticalAlign: 'inherit' }}>86%</div>
                        </span>
                        </p>
                        <p className="c-stat__copy" aria-describedby="stat_description">
                        <div style={{ verticalAlign: 'inherit' }}>cảm thấy khả năng làm việc từ xa của họ được cải thiện</div>
                        <sup>
                            <div style={{ verticalAlign: 'inherit' }}>*</div>
                        </sup>
                        <span className="u-visually-hidden" id="stat_description">
                            <div style={{ verticalAlign: 'inherit' }}>
                            Trung bình có trọng số. Dựa trên 2.707 phản hồi từ người dùng Slack ở Hoa Kỳ, Anh, Úc và Canada với tỷ lệ sai số ±2% ở khoảng tin cậy 95% (tháng 12 năm 2021).
                            </div>
                        </span>
                        </p>
                    </li>

                    <li className="c-stat">
                        <p>
                        <span className="c-stat__number">
                            <div style={{ verticalAlign: 'inherit' }}>88%</div>
                        </span>
                        </p>
                        <p className="c-stat__copy" aria-describedby="stat_description">
                        <div style={{ verticalAlign: 'inherit' }}>cảm thấy gắn kết hơn với nhóm của họ</div>
                        <sup>
                            <div style={{ verticalAlign: 'inherit' }}>*</div>
                        </sup>
                        <span className="u-visually-hidden" id="stat_description">
                            <div style={{ verticalAlign: 'inherit' }}>
                            Trung bình có trọng số. Dựa trên 2.707 phản hồi từ người dùng Slack ở Hoa Kỳ, Anh, Úc và Canada với tỷ lệ sai số ±2% ở khoảng tin cậy 95% (tháng 12 năm 2021).
                            </div>
                        </span>
                        </p>
                    </li>
                    </ul>

               
                </div>
            </section>




            
            <section className='o-content-full-width c-stories-spotlight u-clip-path'>
                <div className='c-stories-spotlight--slides swiper-container swiper-container-horizontal'>
                    <div className='swiper-wrapper'>
                        <div className='swiper-slide'>
                            <div className = 'o-contain-container c-card--story__carousel v--spotlight  t-horchata'>
                                <div className='o-block-grid v--fluid v--centered u-hide-on-print c-youtube-video--showcase'>
                                    {/* <video height="544" width="100%"  autoPlay loop muted className='video w-full h-screen relative'>
                                    <source src="https://a.slack-edge.com/1b4e2a3/marketing/img/homepage/true-prospects/customer-showcase/IBM_08.mp4" type="video/mp4" ></source>
                                    </video> */}
                                    {/* <a 
                                        aria-label="Phát video" 
                                        className="v--top v--flush c-youtube-video--showcase__link u-rect-ice-blue-hover" 
                                        data-clog-click="" 
                                        data-clog-params="trigger=63nWDTJdeQ0" 
                                        data-clog-ui-element="btn_play_video" 
                                        data-clog-ui-component="inc_fs_youtube_player" 
                                        data-yt="63nWDTJdeQ0" 
                                        href="https://www.youtube.com/embed/63nWDTJdeQ0"
                                        >
                                        <video 
                                            className="video_capsule asset_height" 
                                            autoPlay 
                                            loop 
                                            title="Video giới thiệu ứng dụng khách Slack" 
                                            muted 
                                            playsInline
                                        >
                                            <source 
                                            src="https://a.slack-edge.com/1b4e2a3/marketing/img/homepage/true-prospects/customer-showcase/IBM_08.mp4" 
                                            type="video/mp4" 
                                            />
                                        </video>
                                        
                                        <svg 
                                            width="84" 
                                            height="60" 
                                            className="c-youtube-video--showcase__icon" 
                                            aria-hidden="true" 
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g fill="none" transform="translate(0 .564)">
                                            <rect height="59" rx="4" width="84"></rect>
                                            <path d="M49 29.95L35 36.9V23L49 29.95Z" fill="#fff"></path>
                                            </g>
                                        </svg>
                                        </a> */}
                                        <img className="picture_height"  width="100%" src="https://cohota.com/cohota/landing-page/img/mobile-app.png" alt="Mobile App" />


                                </div>
                                <div className='carousel_copy align-text'>
                                    {/* <p class="customer_quote ">
                                    <div  style={{ verticalAlign: 'inherit' }}>“Bất kể quy mô doanh nghiệp của bạn như thế nào, 
                                        Slack đều mang đến sức mạnh đáng kinh ngạc trong thế giới công việc kết hợp. Công cụ này giúp bạn thực hiện một chương trình hiện đại hóa quy mô nhỏ hoặc một sáng kiến ​​chuyển đổi kỹ thuật số. »
                                        </div>
                                    </p>
                                    <span className="customer_author">Jennifer Quinlan</span>
                                    <span>Đối tác quản lý, Giám đốc IBM iX - Chuyển đổi trải nghiệm và vòng đời khách hàng, IBM</span>


                                    <a href="https://slack.com/intl/fr-vn/customer-stories" 
                                        className="c-card--story v--homepage u-padding-top--medium" 
                                        data-clog-click="" 
                                        data-clog-ui-element="link_card_cta" 
                                        data-clog-ui-component="stories_showcase_card" 
                                        data-clog-params="trigger=">
                                        
                                        <span className="c-card--story__cta t-arrow-link">
                                            Đọc thêm lời chứng thực của khách hàng
                                        </span>
                                        </a> */}
                                        <h3 class="display-as-h1 u-text--center u-i18n-max-width--48rem">
                    <div >Học tập nhanh chóng, tiện lợi</div>
                </h3>
                                         <p className="u-margin-top--medium u-margin-bottom--flush">
                                    <strong>Bạn di chuyển mỗi ngày, yêu thích các chuyến du lịch xa và dành nhiều thời gian trên các thiết bị di động. </strong> Hãy tận dụng từng giây phút để có những trải nghiệm học tập tốt nhất.
                                </p>


                                </div>
                                
                            </div>
                            
                            

                        </div>

                    </div>

                </div>

            </section>
            <section className='o-section o-section--feature v--borderless u-background--horchata padding-bottom-large padding-top-large '>
                <div class="o-contain-container">
                    <header class="u-text--center">
                        <h2><font style={{ verticalAlign: 'inherit' }}>Tìm hiểu thêm về cách làm việc mới này</font>
                        </h2>
                        </header>
                        </div>
                <div className='o-contain-container v--news-container padding-bottom-large'> 
                    <div className='o-block-grid v--four u-margin-top--x-large u-hide-on-mobile v--centered-on-tablet'>
                        <a  target="_blank"  //1
                            href="https://slack.com/intl/fr-vn/features" 
                            rel="noopener" 
                            // aria-describedby="promo_aria_description" 
                            // data-clog-click="" 
                            // data-clog-ui-element="link_promo_cta" 
                            // data-clog-ui-step="page_home" 
                            // data-clog-ui-component="inc_promo" 
                            // data-clog-params="trigger=features" 
                            className="c-promo v--flush v--border">
                                 <div className="c-promo__content" role="region" aria-label="Tính năng, Khám phá các khả năng của nền tảng, Khám phá">
                                        <figure className="c-promo__media">
                                        <img 
                                            alt="Logo Slack trên biểu tượng hình vuông" 
                                            loading="lazy" 
                                            className="lazyload" 
                                            data-src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-01.jpg"
                                            data-srcset="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-01.jpg 1x, https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-01@2x.jpg 2x" 
                                            src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-01.jpg"
                                            srcSet="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-01.jpg 1x, https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-01@2x.jpg 2x" 
                                        />
                                        </figure>
                                        <header className="c-promo__copy">
                                        <span className="c-promo__subheading">Đặc trưng</span>
                                        <h3 className="c-promo__heading">Khám phá các khả năng của nền tảng</h3>
                                        </header>
                                    </div>
                                <div className="c-promo__ctas" aria-hidden="true">
                                        <span className="c-promo__cta">
                                        <span>Phát hiện</span>
                                        </span>
                                    </div>

                        </a>
                        <a  target="_blank" 
                            href="https://slack.com/intl/fr-vn/blog/news/slack-turns-10" //2
                            rel="noopener" 
                            // aria-describedby="promo_aria_description" 
                            // data-clog-click="" 
                            // data-clog-ui-element="link_promo_cta" 
                            // data-clog-ui-step="page_home" 
                            // data-clog-ui-component="inc_promo" 
                            // data-clog-params="trigger=features" 
                            className="c-promo v--flush v--border">
                                 <div className="c-promo__content" role="region" aria-label="Tính năng, Khám phá các khả năng của nền tảng, Khám phá">
                                        <figure className="c-promo__media">
                                        <img 
                                            alt="" 
                                            loading="lazy" 
                                            className="lazyload" 
                                            data-src="https://a.slack-edge.com/971bef2/marketing/img/promos/slack-turns-10-blog.jpg" 
                                            data-srcset="https://a.slack-edge.com/971bef2/marketing/img/promos/slack-turns-10-blog.jpg 1x, https://a.slack-edge.com/971bef2/marketing/img/promos/slack-turns-10-blog@2x.jpg 2x" 
                                            src="https://a.slack-edge.com/971bef2/marketing/img/promos/slack-turns-10-blog.jpg" 
                                            srcSet="https://a.slack-edge.com/971bef2/marketing/img/promos/slack-turns-10-blog.jpg 1x, https://a.slack-edge.com/971bef2/marketing/img/promos/slack-turns-10-blog@2x.jpg 2x" 
                                            />

                                        </figure>
                                        <header className="c-promo__copy">
                                        <span className="c-promo__subheading">Đặc trưng</span>
                                        <h3 className="c-promo__heading">10 tính năng cần biết (và yêu thích) nhân dịp kỷ niệm </h3>
                                        </header>
                                    </div>
                                <div className="c-promo__ctas" aria-hidden="true">
                                        <span className="c-promo__cta">
                                        <span>Phát hiện</span>
                                        </span>
                                    </div>
                        </a>
                        <a  target="_blank" 
                            href="https://slack.com/intl/fr-vn/solutions" //3
                            rel="noopener" 
                            // aria-describedby="promo_aria_description" 
                            // data-clog-click="" 
                            // data-clog-ui-element="link_promo_cta" 
                            // data-clog-ui-step="page_home" 
                            // data-clog-ui-component="inc_promo" 
                            // data-clog-params="trigger=features" 
                            className="c-promo v--flush v--border">
                                 <div className="c-promo__content" role="region" aria-label="Blog, 10 tính năng cần biết (và yêu thích) nhân kỷ niệm 10<sup>th</sup> của Slack, Đọc thêm">
                                        <figure className="c-promo__media">
                                        <img 
                                            alt="Megaphone đại diện cho các nhóm tiếp thị" 
                                            loading="lazy" 
                                            className="lazyload" 
                                            data-src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-03.jpg" 
                                            data-srcset="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-03.jpg 1x, https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-03@2x.jpg 2x" 
                                            src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-03.jpg" 
                                            srcSet="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-03.jpg 1x, https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-03@2x.jpg 2x" 
                                            />

                                        </figure>
                                        <header className="c-promo__copy">
                                        <span className="c-promo__subheading">Đặc trưng</span>
                                        <h3 className="c-promo__heading">Tìm hiểu những gì Slack có thể làm cho nhóm của bạn</h3>
                                        </header>
                                    </div>
                                <div className="c-promo__ctas" aria-hidden="true">
                                        <span className="c-promo__cta">
                                        <span>Phát hiện</span>
                                        </span>
                                    </div>

                        </a>
                        <a  target="_blank" 
                            href="https://slack.com/intl/fr-vn/help/categories/360000049063" //done
                            rel="noopener" 
                            // aria-describedby="promo_aria_description" 
                            // data-clog-click="" 
                            // data-clog-ui-element="link_promo_cta" 
                            // data-clog-ui-step="page_home" 
                            // data-clog-ui-component="inc_promo" 
                            // data-clog-params="trigger=features" 
                            className="c-promo v--flush v--border">
                                 <div className="c-promo__content" role="region" aria-label="Tính năng, Khám phá các khả năng của nền tảng, Khám phá">
                                        <figure className="c-promo__media">
                                        <img 
                                            alt="Tên lửa hoạt hình đang bay" 
                                            loading="lazy" 
                                            className="lazyload" 
                                            data-src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-04.jpg" 
                                            data-srcset="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-04.jpg 1x, https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-04@2x.jpg 2x" 
                                            src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-04.jpg" 
                                            srcSet="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-04.jpg 1x, https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-04@2x.jpg 2x" 
                                            />
                                        </figure>
                                        <header className="c-promo__copy">
                                        <span className="c-promo__subheading">Đặc trưng</span>
                                        <h3 className="c-promo__heading">Tìm hiểu những điều cơ bản về Slack</h3>
                                        </header>
                                    </div>
                                <div className="c-promo__ctas" aria-hidden="true">
                                        <span className="c-promo__cta">
                                        <span>Phát hiện</span>
                                        </span>
                                    </div>

                        </a>


                    </div>

                </div>

            </section>
            <section className="o-section c-cta c-cta--signup t-dark-theme v--footer u-hide-on-print u-padding-top--ultra u-padding-bottom--ultra">
                    <div className="o-content-container">
                        <h3 className="c-type-headline-primary u-margin-bottom--x-large u-text--reverse">
                        Khám phá tất cả các khả năng của Slack
                        </h3>
                        <a 
                        href="https://slack.com/intl/fr-vn/get-started" 
                        className="c-button v--secondary v--no-border" 
                        data-gtm-click="SignUp" 
                        data-clog-ui-element="link_get_started" 
                        data-clog-ui-component="inc_cta_footer" 
                        data-qa="footer_cta_get_started" 
                        data-clog-click=""
                        >
                        Những bước đầu tiên
                        </a>
                        <a 
                        href="https://slack.com/intl/fr-vn/contact-sales?geocode=fr-vn&amp;from_home=1" 
                        className="c-button v--secondary v--reverse" 
                        data-clog-click="" 
                        data-clog-ui-element="link_contact_sales" 
                        data-clog-ui-component="inc_cta_footer" 
                        data-qa="footer_cta_contact_sales"
                        >
                        Liên hệ với nhóm của chúng tôi
                        </a>
                    </div>
                    </section>

        </div>
        
        

    )
}
export default Homepage;