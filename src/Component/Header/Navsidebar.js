import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Header/navsidebar.scss'
import '../Main/Homepage.scss'
import '../Main/footer.scss'
import React, { useState, useEffect } from 'react';



const Navsidebar = ()=>{
  const [showMenu, setShowMenu] = useState(false);
  const [IdNav, setIdNav] = useState('');
  //is-fixed
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50  ) {
        setShowMenu(true);
      } 
      if(window.scrollY > 350){
        setShowMenu(true);
        setIdNav('is-fixed')
      }
      
      else {
        setShowMenu(false);

        setIdNav('');
      }
    };


    window.addEventListener('scroll', handleScroll);

    // Dọn dẹp sự kiện khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

 

  return (
    <Navbar expand="lg" className={`c-nav  c-nav--primary--expanded ${IdNav}`}>
      <Container  className='c-nav__row o-nav--primary o-content-container VN'>
         {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>  */}
        <div className="c-slacklogo">
                <a
                  data-clog-click=""
                  data-clog-ui-element="link_home"
                  data-clog-ui-component="inc_header_nav_deux"
                  className="c-slacklogo--white"
                  href="https://slack.com/intl/fr-vn/"
                  aria-label="chùng xuống"
                  data-qa="logo"
                >
                  {/* <img
                    src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-white.png"
                    srcSet="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-white.png 1x, https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-white@2x.png 2x"
                    alt="chùng xuống"
                    className="c-slacklogo--white"
                  /> */}
                  <img
                    src="	https://cohota.com/cohota/logo-cohota-pc.svg"
                    srcSet="	https://cohota.com/cohota/logo-cohota-pc.svg"
                    alt="chùng xuống"
                    className="c-slacklogo--color"
                  />
                </a>
              </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
        <Nav className="me-auto c-nav__list slack_ai_layout">
          <ul className='c-extnav-level__0'>
            <li id='nav_features' className='nav_parent nav_parent_l1 expanded'>
                <NavDropdown  title="Đặc trưng" id="basic-nav-dropdown"  className='dropdown_button'>
                  <ul className='c-extnav-level__1 ' style={{ width: '900px', border: 'navajowhite' }}>
                    <li className='nav_parent nav_parent_l2' id="nav_features_main">
                        <ul className='c-extnav-level__2'>
                            <li className='nav_parent nav_parent_l3' id='nav_features_main_top'>
                            
                                <ul className='c-extnav-level__3'>
                                <li id="nav_collaboration" className="nav_parent push_down_ai nav_parent_l4">
                                    <div className="nav_parent_label nav_parent_label_l4">
                                      <span>SỰ HỢP TÁC</span>
                                    </div>
                                    <ul className="c-extnav-level__4">
                                      <li id="link_channels_exp_nav" className="nav_link nav_link_l5">
                                        <a
                                          href="https://slack.com/intl/fr-vn/features/channels"
                                          data-clog-click=""
                                          data-clog-ui-element="link_channels_exp_nav"
                                          data-clog-ui-component="inc_header_exp_nav"
                                        >
                                          <div className="nav_link_label">
                                            <div><span>Kênh</span></div>
                                          </div>
                                          <div className="nav_link_sublabel">
                                            <span>Tổ chức các nhóm và nhiệm vụ</span>
                                          </div>
                                        </a>
                                      </li>

                                      <li id="link_connect_exp_nav" className="nav_link nav_link_l5">
                                        <a
                                          href="https://slack.com/intl/fr-vn/connect"
                                          data-clog-click=""
                                          data-clog-ui-element="link_connect_exp_nav"
                                          data-clog-ui-component="inc_header_exp_nav"
                                        >
                                          <div className="nav_link_label">
                                            <div><span>Kết nối lỏng lẻo</span></div>
                                          </div>
                                          <div className="nav_link_sublabel">
                                            <span>Làm việc với các đối tác bên ngoài</span>
                                          </div>
                                        </a>
                                      </li>

                                      <li id="link_messaging_exp_nav" className="nav_link nav_link_l5">
                                        <a
                                          href="https://slack.com/intl/fr-vn/team-chat"
                                          data-clog-click=""
                                          data-clog-ui-element="link_messaging_exp_nav"
                                          data-clog-ui-component="inc_header_exp_nav"
                                        >
                                          <div className="nav_link_label">
                                            <div><span>Nhắn tin</span></div>
                                          </div>
                                          <div className="nav_link_sublabel">
                                            <span>Trò chuyện với nhóm của bạn</span>
                                          </div>
                                        </a>
                                      </li>

                                      <li id="link_huddles_exp_nav" className="nav_link nav_link_l5">
                                        <a
                                          href="https://slack.com/intl/fr-vn/features/huddles"
                                          data-clog-click=""
                                          data-clog-ui-element="link_huddles_exp_nav"
                                          data-clog-ui-component="inc_header_exp_nav"
                                        >
                                          <div className="nav_link_label">
                                            <div><span>Cuộc gọi nhóm</span></div>
                                          </div>
                                          <div className="nav_link_sublabel">
                                            <span>Tham gia vào các cuộc họp âm thanh và video</span>
                                          </div>
                                        </a>
                                      </li>

                                      <li id="link_clips_exp_nav" className="nav_link nav_link_l5">
                                        <a
                                          href="https://slack.com/intl/fr-vn/features/clips"
                                          data-clog-click=""
                                          data-clog-ui-element="link_clips_exp_nav"
                                          data-clog-ui-component="inc_header_exp_nav"
                                        >
                                          <div className="nav_link_label">
                                            <div><span>Đoạn phim</span></div>
                                          </div>
                                          <div className="nav_link_sublabel">
                                            <span>Lưu và chia sẻ thông tin cập nhật</span>
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                <li id="nav_project_management" className="nav_parent push_down_ai nav_parent_l4">
                                  <div className="nav_parent_label nav_parent_label_l4">
                                    <span>QUẢN LÝ DỰ ÁN</span>
                                  </div>
                                  <ul className="c-extnav-level__4">
                                    <li id="link_canvas_exp_nav" className="nav_link nav_link_l5">
                                      <a href="https://slack.com/intl/fr-vn/features/canvas" data-clog-click="" data-clog-ui-element="link_canvas_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                                        <div className="nav_link_label">
                                          <div>
                                            <span>Vải bạt</span>
                                          </div>
                                        </div>
                                        <div className="nav_link_sublabel">
                                          <span>Tạo tài liệu chi tiết và linh hoạt</span>
                                        </div>
                                      </a>
                                    </li>
                                    <li id="link_lists_nav" className="nav_link nav_link_l5">
                                      <a href="https://slack.com/intl/fr-vn/features/task-list" data-clog-click="" data-clog-ui-element="link_lists_nav" data-clog-ui-component="inc_header_exp_nav">
                                        <div className="nav_link_label">
                                          <div>
                                            <span>Danh sách</span>
                                          </div>
                                        </div>
                                        <div className="nav_link_sublabel">
                                          <span>Tổ chức, giám sát và quản lý dự án</span>
                                        </div>
                                      </a>
                                    </li>
                                    <li id="link_search_exp_nav" className="nav_link nav_link_l5">
                                      <a href="https://slack.com/intl/fr-vn/knowledge-sharing" data-clog-click="" data-clog-ui-element="link_search_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                                        <div className="nav_link_label">
                                          <div>
                                            <span>Để nghiên cứu</span>
                                          </div>
                                        </div>
                                        <div className="nav_link_sublabel">
                                          <span>Tìm kiếm kiến ​​thức được chia sẻ</span>
                                        </div>
                                      </a>
                                    </li>
                                    <li id="link_file_sharing_exp_nav" className="nav_link nav_link_l5">
                                      <a href="https://slack.com/intl/fr-vn/document-sharing" data-clog-click="" data-clog-ui-element="link_file_sharing_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                                        <div className="nav_link_label">
                                          <div>
                                            <span>Chia sẻ tập tin</span>
                                          </div>
                                        </div>
                                        <div className="nav_link_sublabel">
                                          <span>Tích hợp các tệp vào quy trình công việc của bạn</span>
                                        </div>
                                      </a>
                                    </li>
                                  </ul>
                                  </li>
                                <li id="nav_integrations" className="nav_parent push_down_ai nav_parent_l4">
                                <div className="nav_parent_label nav_parent_label_l4">
                                  <span>TÍCH HỢP</span>
                                </div>
                                <ul className="c-extnav-level__4">
                                  <li id="link_workflow_builder_exp_nav" className="nav_link nav_link_l5">
                                    <a href="https://slack.com/intl/fr-vn/features/workflow-automation" data-clog-click="" data-clog-ui-element="link_workflow_builder_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                                      <div className="nav_link_label">
                                        <div>
                                          <span>Trình tạo quy trình làm việc</span>
                                        </div>
                                      </div>
                                      <div className="nav_link_sublabel">
                                        <span>Tự động hóa công việc hàng ngày</span>
                                      </div>
                                    </a>
                                  </li>
                                  <li id="link_integrations_exp_nav" className="nav_link nav_link_l5">
                                    <a href="https://slack.com/intl/fr-vn/integrations" data-clog-click="" data-clog-ui-element="link_integrations_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                                      <div className="nav_link_label">
                                        <div>
                                          <span>Ứng dụng và tích hợp</span>
                                        </div>
                                      </div>
                                      <div className="nav_link_sublabel">
                                        <span>Liên kết các công cụ của bạn với Slack</span>
                                      </div>
                                    </a>
                                  </li>
                                  <li id="link_slack_and_salesforce_exp_nav" className="nav_link nav_link_l5">
                                    <a href="https://slack.com/intl/fr-vn/salesforce-slack-integration" data-clog-click="" data-clog-ui-element="link_slack_and_salesforce_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                                      <div className="nav_link_label">
                                        <div>
                                          <span>Slack và Salesforce</span>
                                        </div>
                                      </div>
                                      <div className="nav_link_sublabel">
                                        <span>Tích hợp dữ liệu CRM vào Slack</span>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </li>




                                </ul>
                              </li>

                    
                            {/* <li><NavDropdown.Item href="#action/3.4" className='nav_parent nav_parent_l3' id='nav_features_main_bottom'>Another action5</NavDropdown.Item></li> */}
                        </ul>
                      </li>
                      <li id="nav_solutions_side" className='nav_parent nav_parent_l2'>
                      <div className="nav_parent_label nav_parent_label_l2">
                        <span>BAO GỒM</span>
                      </div>
                      <ul className="c-extnav-level__2">
                        <li id="nav_solutions_side_top" className="nav_parent nav_parent_l3">
                          <ul className="c-extnav-level__3">
                            <li id="featured_story_solutions" className="nav_story">
                              <a 
                                href="https://slack.com/intl/fr-vn/customer-stories/openai-connects-with-customers-and-expands-chatgpt-with-slack" 
                                data-clog-click="" 
                                data-clog-ui-element="link_chatgtp_exp_nav" 
                                data-clog-ui-component="inc_header_exp_nav"
                              >
                                <div className="nav_story_content">
                                  <img 
                                    src="https://a.slack-edge.com/3103e63/marketing/img/features/ai/nav-pricing/slack-ai-blog-hero@2x.png" 
                                    className="nav_story_img" 
                                    alt=""
                                  />
                                  <div className="nav_story_label">
                                    <span>Cách OpenAI kết nối với khách hàng và cải thiện ChatGPT với Slack</span>
                                  </div>
                                  <div className="nav_story_sublabel o-section--feature__link">
                                    <span>Tìm hiểu thêm</span>
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li id="nav_solutions_side_bottom" className="nav_parent nav_parent_l3">
                          <ul className="c-extnav-level__3">
                            <li id="link_task_management_exp_nav" className="nav_sidebar_label">
                              <a 
                                className="nav_sidebar_link" 
                                href="https://slack.com/intl/fr-vn/solutions/task-management" 
                                data-clog-click="" 
                                data-clog-ui-element="link_task_management_exp_nav" 
                                data-clog-ui-component="inc_header_exp_nav"
                              >
                                <span>Quản lý tác vụ</span>
                              </a>
                            </li>
                            <li id="link_scale_exp_nav" className="nav_sidebar_label">
                              <a 
                                className="nav_sidebar_link" 
                                href="https://slack.com/intl/fr-vn/scale" 
                                data-clog-click="" 
                                data-clog-ui-element="link_scale_exp_nav" 
                                data-clog-ui-component="inc_header_exp_nav"
                              >
                                <span>Khả năng mở rộng</span>
                              </a>
                            </li>
                            <li id="link_engagement_exp_nav" className="nav_sidebar_label">
                              <a 
                                className="nav_sidebar_link" 
                                href="https://slack.com/engage-users" 
                                data-clog-click="" 
                                data-clog-ui-element="link_engagement_exp_nav" 
                                data-clog-ui-component="inc_header_exp_nav"
                              >
                                <span>Đầu tư cá nhân</span>
                              </a>
                            </li>
                            <li id="link_trust_exp_nav" className="nav_sidebar_label">
                              <a 
                                className="nav_sidebar_link" 
                                href="https://slack.com/intl/fr-vn/trust" 
                                data-clog-click="" 
                                data-clog-ui-element="link_trust_exp_nav" 
                                data-clog-ui-component="inc_header_exp_nav"
                              >
                                <span>Lòng tin</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  
                </NavDropdown>
              </li>
            <li id='nav_features' className='nav_parent nav_parent_l1 expanded'>

                <NavDropdown  title="Giải pháp" id="basic-nav-dropdown"  className='dropdown_button'>
                  <ul className='c-extnav-level__1 ' style={{ width: '900px', border: 'navajowhite' }}>
                    <li className='nav_parent nav_parent_l2' id="nav_features_main">
                        <ul className='c-extnav-level__2'>
                            <li className='nav_parent nav_parent_l3' id='nav_features_main_top'>
                            
                                <ul className='c-extnav-level__3'>
                                <li id="nav_department" className="nav_parent push_down_ai nav_parent_l4">
                      <div className="nav_parent_label nav_parent_label_l4">
                        THEO DỊCH VỤ
                      </div>
                      <ul className="c-extnav-level__4">
                        <li id="link_engineering_exp_nav" className="nav_link nav_link_l5">
                          <a href="https://slack.com/intl/fr-vn/solutions/engineering" data-clog-click="" data-clog-ui-element="link_engineering_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                            <div className="nav_link_label">
                              <div>Kỹ thuật</div>
                            </div>
                          </a>
                        </li>
                        <li id="link_it_exp_nav" className="nav_link nav_link_l5">
                          <a href="https://slack.com/intl/fr-vn/solutions/information-technology" data-clog-click="" data-clog-ui-element="link_it_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                            <div className="nav_link_label">
                              <div>Khoa học máy tính</div>
                            </div>
                          </a>
                        </li>
                        <li id="link_customer_service_exp_nav" className="nav_link nav_link_l5">
                          <a href="https://slack.com/intl/fr-vn/solutions/customer-service" data-clog-click="" data-clog-ui-element="link_customer_service_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                            <div className="nav_link_label">
                              <div>Dịch vụ khách hàng</div>
                            </div>
                          </a>
                        </li>
                        <li id="link_sales_exp_nav" className="nav_link nav_link_l5">
                          <a href="https://slack.com/intl/fr-vn/solutions/sales" data-clog-click="" data-clog-ui-element="link_sales_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                            <div className="nav_link_label">
                              <div>Việc bán hàng</div>
                            </div>
                          </a>
                        </li>
                        <li id="link_project_management_exp_nav" className="nav_link nav_link_l5">
                          <a href="https://slack.com/intl/fr-vn/solutions/project-management" data-clog-click="" data-clog-ui-element="link_project_management_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                            <div className="nav_link_label">
                              <div>Quản lý dự án</div>
                            </div>
                          </a>
                        </li>
                        <li id="link_marketing_exp_nav" className="nav_link nav_link_l5">
                          <a href="https://slack.com/intl/fr-vn/solutions/marketing" data-clog-click="" data-clog-ui-element="link_marketing_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                            <div className="nav_link_label">
                              <div>Tiếp thị</div>
                            </div>
                          </a>
                        </li>
                        <li id="link_hr_exp_nav" className="nav_link nav_link_l5">
                          <a href="https://slack.com/intl/fr-vn/solutions/human-resources" data-clog-click="" data-clog-ui-element="link_hr_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                            <div className="nav_link_label">
                              <div>Nguồn nhân lực</div>
                            </div>
                          </a>
                        </li>
                        <li id="link_security_solutions_exp_nav" className="nav_link nav_link_l5">
                          <a href="https://slack.com/intl/fr-vn/solutions/security" data-clog-click="" data-clog-ui-element="link_security_solutions_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                            <div className="nav_link_label">
                              <div>Bảo vệ</div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li id="nav_industry" className="nav_parent push_down_ai nav_parent_l4">
                        <div className="nav_parent_label nav_parent_label_l4">
                          <span>THEO NGÀNH</span>
                        </div>
                        <ul className="c-extnav-level__4">
                          <li id="link_mae_exp_nav" className="nav_link nav_link_l5">
                            <a 
                              href="https://slack.com/intl/fr-vn/solutions/manufacturing" 
                              data-clog-click="" 
                              data-clog-ui-element="link_mae_exp_nav" 
                              data-clog-ui-component="inc_header_exp_nav"
                            >
                              <div className="nav_link_label">
                                <div>Sản xuất, ô tô và năng lượng</div>
                              </div>
                            </a>
                          </li>
                          <li id="link_technology_exp_nav" className="nav_link nav_link_l5">
                            <a 
                              href="https://slack.com/intl/fr-vn/solutions/technology" 
                              data-clog-click="" 
                              data-clog-ui-element="link_technology_exp_nav" 
                              data-clog-ui-component="inc_header_exp_nav"
                            >
                              <div className="nav_link_label">
                                <div>Công nghệ</div>
                              </div>
                            </a>
                          </li>
                          <li id="link_media_exp_nav" className="nav_link nav_link_l5">
                            <a 
                              href="https://slack.com/intl/fr-vn/solutions/media" 
                              data-clog-click="" 
                              data-clog-ui-element="link_media_exp_nav" 
                              data-clog-ui-component="inc_header_exp_nav"
                            >
                              <div className="nav_link_label">
                                <div>Phương tiện truyền thông</div>
                              </div>
                            </a>
                          </li>
                          <li id="link_small_business_exp_nav" className="nav_link nav_link_l5">
                            <a 
                              href="https://slack.com/intl/fr-vn/solutions/small-business" 
                              data-clog-click="" 
                              data-clog-ui-element="link_small_business_exp_nav" 
                              data-clog-ui-component="inc_header_exp_nav"
                            >
                              <div className="nav_link_label">
                                <div>Doanh nghiệp nhỏ</div>
                              </div>
                            </a>
                          </li>
                          <li id="link_financial_services_exp_nav" className="nav_link nav_link_l5">
                            <a 
                              href="https://slack.com/intl/fr-vn/solutions/financial-services" 
                              data-clog-click="" 
                              data-clog-ui-element="link_financial_services_exp_nav" 
                              data-clog-ui-component="inc_header_exp_nav"
                            >
                              <div className="nav_link_label">
                                <div>Dịch vụ tài chính</div>
                              </div>
                            </a>
                          </li>
                          <li id="link_retail_exp_nav" className="nav_link nav_link_l5">
                            <a 
                              href="https://slack.com/intl/fr-vn/solutions/retail" 
                              data-clog-click="" 
                              data-clog-ui-element="link_retail_exp_nav" 
                              data-clog-ui-component="inc_header_exp_nav"
                            >
                              <div className="nav_link_label">
                                <div>Bán lẻ</div>
                              </div>
                            </a>
                          </li>
                          <li id="link_education_exp_nav" className="nav_link nav_link_l5">
                            <a 
                              href="https://slack.com/intl/fr-vn/solutions/distance-learning" 
                              data-clog-click="" 
                              data-clog-ui-element="link_education_exp_nav" 
                              data-clog-ui-component="inc_header_exp_nav"
                            >
                              <div className="nav_link_label">
                                <div>Giáo dục</div>
                              </div>
                            </a>
                          </li>
                          <li id="link_healthcare_exp_nav" className="nav_link nav_link_l5">
                            <a 
                              href="https://slack.com/intl/fr-vn/solutions/healthcare" 
                              data-clog-click="" 
                              data-clog-ui-element="link_healthcare_exp_nav" 
                              data-clog-ui-component="inc_header_exp_nav"
                            >
                              <div className="nav_link_label">
                                <div>Khoa học sức khỏe và đời sống</div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </li>






                </ul>
              </li>

    
            {/* <li><NavDropdown.Item href="#action/3.4" className='nav_parent nav_parent_l3' id='nav_features_main_bottom'>Another action5</NavDropdown.Item></li> */}
        </ul>
                      </li>
                    <li id="nav_solutions_side" className='nav_parent nav_parent_l2'>
                      <div className="nav_parent_label nav_parent_label_l2">
                        <span>BAO GỒM</span>
                      </div>
                      <ul className="c-extnav-level__2">
                        <li id="nav_solutions_side_top" className="nav_parent nav_parent_l3">
                          <ul className="c-extnav-level__3">
                            <li id="featured_story_solutions" className="nav_story">
                              <a 
                                href="https://slack.com/intl/fr-vn/customer-stories/openai-connects-with-customers-and-expands-chatgpt-with-slack" 
                                data-clog-click="" 
                                data-clog-ui-element="link_chatgtp_exp_nav" 
                                data-clog-ui-component="inc_header_exp_nav"
                              >
                                <div className="nav_story_content">
                                  <img 
                                    src="https://a.slack-edge.com/a8142f4/marketing/img/nav/promo-solutions@2x.png" 
                                    className="nav_story_img" 
                                    alt=""
                                  />
                                  <div className="nav_story_label">
                                    <span>Cách OpenAI kết nối với khách hàng và cải thiện ChatGPT với Slack</span>
                                  </div>
                                  <div className="nav_story_sublabel o-section--feature__link">
                                    <span>Đọc lời chứng thực của khách hàng</span>
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li id="nav_solutions_side_bottom" className="nav_parent nav_parent_l3">
                          <ul className="c-extnav-level__3">
                            <li id="link_task_management_exp_nav" className="nav_sidebar_label">
                              <a 
                                className="nav_sidebar_link" 
                                href="https://slack.com/intl/fr-vn/solutions/task-management" 
                                data-clog-click="" 
                                data-clog-ui-element="link_task_management_exp_nav" 
                                data-clog-ui-component="inc_header_exp_nav"
                              >
                                <span>Quản lý tác vụ</span>
                              </a>
                            </li>
                            <li id="link_scale_exp_nav" className="nav_sidebar_label">
                              <a 
                                className="nav_sidebar_link" 
                                href="https://slack.com/intl/fr-vn/scale" 
                                data-clog-click="" 
                                data-clog-ui-element="link_scale_exp_nav" 
                                data-clog-ui-component="inc_header_exp_nav"
                              >
                                <span>Khả năng mở rộng</span>
                              </a>
                            </li>
                            <li id="link_engagement_exp_nav" className="nav_sidebar_label">
                              <a 
                                className="nav_sidebar_link" 
                                href="https://slack.com/engage-users" 
                                data-clog-click="" 
                                data-clog-ui-element="link_engagement_exp_nav" 
                                data-clog-ui-component="inc_header_exp_nav"
                              >
                                <span>Đầu tư cá nhân</span>
                              </a>
                            </li>
                            <li id="link_trust_exp_nav" className="nav_sidebar_label">
                              <a 
                                className="nav_sidebar_link" 
                                href="https://slack.com/intl/fr-vn/trust" 
                                data-clog-click="" 
                                data-clog-ui-element="link_trust_exp_nav" 
                                data-clog-ui-component="inc_header_exp_nav"
                              >
                                <span>Lòng tin</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                  </ul>
  
                  </NavDropdown>


              </li>
            <li id='nav_features' className='nav_parent nav_parent_l1 expanded'>
            
              <a 
                href="https://forum.cohota.com/" 
                data-clog-click="" 
                data-clog-ui-element="link_enterprise_exp_nav" 
                data-clog-ui-component="inc_header_exp_nav"
                id="basic-nav-dropdown"
                target='blank'
              >
                
                 <div>
                    <span className='nav_parent_label nav_parent_label_l1'>Diễn đàn cohota</span>
                  </div>
                 
                
              </a>

              
              
              </li>
            {/* <li id='nav_features' className='nav_parent nav_parent_l1 expanded'>
            <NavDropdown  title="Tài Nguyên" id="basic-nav-dropdown"  className='dropdown_button'>
              <ul className='c-extnav-level__1' style={{ width: '900px', border: 'navajowhite' }}>
              <li className='nav_parent nav_parent_l2' id="nav_features_main">
              <ul className="c-extnav-level__2">
                <li id="nav_resources_main_top" className="nav_parent nav_parent_l3">
                  <ul className="c-extnav-level__3">
                    <li id="link_resources_exp_nav" className="nav_link nav_link_l4">
                      <a href="https://slack.com/intl/fr-vn/resources" data-clog-click="" data-clog-ui-element="link_resources_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                        <div className="nav_link_label">
                          <div>Thư viện tài nguyên</div>
                        </div>
                      </a>
                    </li>
                    <li id="link_whats_new_exp_nav" className="nav_link nav_link_l4">
                      <a href="https://slack.com/intl/fr-vn/releases" data-clog-click="" data-clog-ui-element="link_whats_new_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                        <div className="nav_link_label">
                          <div>Có gì mới</div>
                        </div>
                      </a>
                    </li>
                    
                    <li id="link_events_exp_nav" className="nav_link nav_link_l4">
                      <a href="https://slack.com/intl/fr-vn/events" data-clog-click="" data-clog-ui-element="link_events_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                        <div className="nav_link_label">
                          <div>Sự kiện</div>
                        </div>
                      </a>
                    </li>
                    <li id="link_developers_exp_nav" className="nav_link nav_link_l4">
                      <a href="https://api.slack.com" data-clog-click="" data-clog-ui-element="link_developers_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                        <div className="nav_link_label">
                          <div>Nhà phát triển</div>
                        </div>
                      </a>
                    </li>
                    <li id="link_partners_exp_nav" className="nav_link nav_link_l4">
                      <a href="https://slack.com/intl/fr-vn/partners" data-clog-click="" data-clog-ui-element="link_partners_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                        <div className="nav_link_label">
                          <div>Đối tác</div>
                        </div>
                      </a>
                    </li>
                    <li id="link_customer_stories_exp_nav" className="nav_link nav_link_l4">
                      <a href="https://slack.com/intl/fr-vn/customer-stories" data-clog-click="" data-clog-ui-element="link_customer_stories_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                        <div className="nav_link_label">
                          <div>Lời chứng thực của khách hàng</div>
                        </div>
                      </a>
                    </li>
                    <li id="link_community_exp_nav" className="nav_link nav_link_l4">
                      <a href="https://slack.com/intl/fr-vn/community" data-clog-click="" data-clog-ui-element="link_community_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                        <div className="nav_link_label">
                          <div>Cộng đồng</div>
                        </div>
                      </a>
                    </li>
                    <li id="link_slack_certified_exp_nav" className="nav_link nav_link_l4">
                      <a href="https://slackcertified.com" data-clog-click="" data-clog-ui-element="link_slack_certified_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                        <div className="nav_link_label">
                          <div>Chứng nhận Slack</div>
                        </div>
                      </a>
                    </li>
                    <li id="link_blog_exp_nav" className="nav_link nav_link_l4">
                      <a href="https://slack.com/intl/fr-vn/blog" data-clog-click="" data-clog-ui-element="link_blog_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                        <div className="nav_link_label">
                          <div>Blog</div>
                        </div>
                      </a>
                    </li>
                    <li id="link_app_directory_exp_nav" className="nav_link nav_link_l4">
                      <a href="https://slack.com/marketplace" data-clog-click="" data-clog-ui-element="link_apps_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                        <div className="nav_link_label">
                          <div>Thị trường Slack</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="nav_resources_main_bottom" className="nav_parent nav_parent_l3">
                  <ul className="c-extnav-level__3">
                    
                  </ul>
                </li>
              </ul>

                </li>
                <li id="nav_resources_side" className="nav_parent nav_parent_l2">
              <div className="nav_parent_label nav_parent_label_l2">BAO GỒM</div>
              <ul className="c-extnav-level__2">
                <li id="nav_resources_side_top" className="nav_parent nav_parent_l3">
                  <ul className="c-extnav-level__3">
                    <li id="featured_story_resources" className="nav_story">
                      <a href="https://slack.com/intl/fr-vn/resources/why-use-slack/state-of-work" data-clog-click="" data-clog-ui-element="link_state_of_work_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                        <div className="nav_story_content">
                          <img src="https://a.slack-edge.com/9bb0396/marketing/img/nav/nav-state-of-work@2x.jpg" className="nav_story_img" alt="" />
                          <div className="nav_story_label">Đánh giá năng suất bằng báo cáo Trạng thái công việc</div>
                          <div className="nav_story_sublabel o-section--feature__link">Đọc ngay</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="nav_resources_side_bottom" className="nav_parent nav_parent_l3">
                  <ul className="c-extnav-level__3">
                    <li id="link_help_exp_nav" className="nav_sidebar_label">
                      <a className="nav_sidebar_link" href="https://slack.com/intl/fr-vn/help" data-clog-click="" data-clog-ui-element="link_help_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                        Trung tâm trợ giúp
                      </a>
                    </li>
                    <li id="link_customer_support_exp_nav" className="nav_sidebar_label">
                      <a className="nav_sidebar_link" href="https://slack.com/intl/fr-vn/help/requests/new" data-clog-click="" data-clog-ui-element="link_customer_support_exp_nav" data-clog-ui-component="inc_header_exp_nav">
                        Hỗ trợ khách hàng
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>


              </ul>

              </NavDropdown>

            </li > */}
            <li id='nav_features' className='nav_parent nav_parent_l1 expanded'>
            
            <a 
              href="https://blog.cohota.com/" 
              data-clog-click="" 
              data-clog-ui-element="link_enterprise_exp_nav" 
              data-clog-ui-component="inc_header_exp_nav"
              id="basic-nav-dropdown"
              target="_blank"
            >
              
               <div>
                  <span className='nav_parent_label nav_parent_label_l1'>Blog</span>
                </div>
               
              
            </a>

            
            
            </li>




            <li id='nav_features' className='nav_parent nav_parent_l1 expanded'>
            
              <a 
                href="https://cohota.com/pricing" 
                data-clog-click="" 
                data-clog-ui-element="link_enterprise_exp_nav" 
                data-clog-ui-component="inc_header_exp_nav"
                id="basic-nav-dropdown"
                target="_blank"
              >
                
                 <div>
                    <span className='nav_parent_label nav_parent_label_l1'>Bảng giá</span>
                  </div>
                 
                
              </a>

              
              
              </li>

              <li id='nav_features' className='nav_parent nav_parent_l1 expanded'>
            
              <a 
                href="https://support.cohota.com/servicedesk/customer/user/login?destination=portalse" 
                data-clog-click="" 
                data-clog-ui-element="link_enterprise_exp_nav" 
                data-clog-ui-component="inc_header_exp_nav"
                id="basic-nav-dropdown"
                target="_blank"
              >
                
                 <div>
                    <span className='nav_parent_label nav_parent_label_l1'>Hỗ trợ</span>
                  </div>
                 
                
              </a>

              
              
              </li>
          </ul>
          <div className='c-nav--signed-out'>
          <a 
            className="c-nav--signed-out__link" 
            data-clog-click="" 
            data-clog-ui-element="link_sign_in_nav" 
            data-clog-ui-component="inc_header_nav_deux" 
            href="https://slack.com/signin" 
            data-qa="link_sign_in_nav"
          >
            <span>Sự liên quan</span>
          </a>
          <a 
              className="c-button v--left v--secondary search-hide-element c-nav--signed-out__contact_sales v--prospect" 
              data-clog-click="" 
              data-clog-ui-component="inc_header_nav_deux" 
              data-clog-ui-element="link_contact_sales" 
              data-qa="link_contact_sales" 
              href="https://slack.com/intl/fr-vn/contact-sales?slug=openai-connects-with-customers-and-expands-chatgpt-with-slack"
            >
              <span>Liên hệ với đội</span>
            </a>
            <a 
              data-clog-click="" 
              data-clog-ui-element="link_get_started" 
              data-clog-ui-component="inc_header_nav_deux" 
              data-gtm-click="SignUp" 
              href="https://slack.com/get-started" 
              className="c-button v--left v--primary" 
              data-qa="cta_get_started"
            >
              <span>Những bước đầu tiên</span>
            </a>




          </div>




            
          </Nav>
        </Navbar.Collapse> 
      </Container>
    </Navbar>
  );
}

export default Navsidebar;



// const Navsidebar = () =>{
//   return(
//     <div className = 'c-nav c-nav--primary--expanded' role='navigation' aria-label="Điều hướng chính">
//       <div className='c-nav__row o-nav--primary o-content-container  VN'>
//       <div className='c-slacklogo'>
//           <a 
//             data-clog-click="" 
//             data-clog-ui-element="link_home" 
//             data-clog-ui-component="inc_header_nav_deux" 
//             className="c-slacklogo--white" 
//             href="https://slack.com/intl/fr-vn/" 
//             aria-label="chùng xuống" 
//             data-qa="logo"
//           >
//             <img 
//               src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-white.png" 
//               srcSet="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-white.png 1x, https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-white@2x.png 2x" 
//               alt="chùng xuống" 
//               className="c-slacklogo--white"
//             />
//             <img 
//               src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black.png" 
//               srcSet="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black.png 1x, https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black@2x.png 2x" 
//               alt="chùng xuống" 
//               className="c-slacklogo--color"
//             />
//           </a>
//         </div>
//       <nav className='c-nav__list slack_ai_layout'>
//         <ul className='c-extnav-level__0'>
//           <li id="nav_features" className='nav_parent nav_parent_l1'>
          
//           <button 
//                 aria-expanded="false" 
//                 aria-haspopup="true" 
//                 tabIndex="0" 
//                 className="dropdown_button" 
//                 data-clog-click="" 
//                 data-clog-ui-element="btn_features_exp_nav" 
//                 data-clog-ui-component="inc_header_exp_nav"
//               >
//                 <span className="nav_parent_label nav_parent_label_l1">
//                   <span style={{ verticalAlign: 'inherit' }}>Đặc trưng</span>
//                 </span>

              
//             </button>
//           <ul className='c-extnav-level__1'>
//             <li id='nav_features_main' className='nav_parent nav_parent_l2'>
//               <ul className='c-extnav-level__2'>
//                 <li id='nav_features_main_top' className='nav_parent nav_parent_l3'>
//                   <ul className='c-extnav-level__3'>
//                   <li id="nav_collaboration" className="nav_parent push_down_ai nav_parent_l4">
// //                                     <div className="nav_parent_label nav_parent_label_l4">
// //                                       <span>SỰ HỢP TÁC</span>
// //                                     </div>
// //                                     <ul className="c-extnav-level__4">
// //                                       <li id="link_channels_exp_nav" className="nav_link nav_link_l5">
// //                                         <a
//                                           href="https://slack.com/intl/fr-vn/features/channels"
//                                           data-clog-click=""
//                                           data-clog-ui-element="link_channels_exp_nav"
//                                           data-clog-ui-component="inc_header_exp_nav"
//                                         >
//                                           <div className="nav_link_label">
//                                             <div><span>Kênh</span></div>
//                                           </div>
//                                           <div className="nav_link_sublabel">
//                                             <span>Tổ chức các nhóm và nhiệm vụ</span>
//                                           </div>
//                                         </a>
//                                       </li>

//                                       <li id="link_connect_exp_nav" className="nav_link nav_link_l5">
//                                         <a
//                                           href="https://slack.com/intl/fr-vn/connect"
//                                           data-clog-click=""
//                                           data-clog-ui-element="link_connect_exp_nav"
//                                           data-clog-ui-component="inc_header_exp_nav"
//                                         >
//                                           <div className="nav_link_label">
//                                             <div><span>Kết nối lỏng lẻo</span></div>
//                                           </div>
//                                           <div className="nav_link_sublabel">
//                                             <span>Làm việc với các đối tác bên ngoài</span>
//                                           </div>
//                                         </a>
//                                       </li>

//                                       <li id="link_messaging_exp_nav" className="nav_link nav_link_l5">
//                                         <a
//                                           href="https://slack.com/intl/fr-vn/team-chat"
//                                           data-clog-click=""
//                                           data-clog-ui-element="link_messaging_exp_nav"
//                                           data-clog-ui-component="inc_header_exp_nav"
//                                         >
//                                           <div className="nav_link_label">
//                                             <div><span>Nhắn tin</span></div>
//                                           </div>
//                                           <div className="nav_link_sublabel">
//                                             <span>Trò chuyện với nhóm của bạn</span>
//                                           </div>
//                                         </a>
//                                       </li>

//                                       <li id="link_huddles_exp_nav" className="nav_link nav_link_l5">
//                                         <a
//                                           href="https://slack.com/intl/fr-vn/features/huddles"
//                                           data-clog-click=""
//                                           data-clog-ui-element="link_huddles_exp_nav"
//                                           data-clog-ui-component="inc_header_exp_nav"
//                                         >
//                                           <div className="nav_link_label">
//                                             <div><span>Cuộc gọi nhóm</span></div>
//                                           </div>
//                                           <div className="nav_link_sublabel">
//                                             <span>Tham gia vào các cuộc họp âm thanh và video</span>
//                                           </div>
//                                         </a>
//                                       </li>

//                                       <li id="link_clips_exp_nav" className="nav_link nav_link_l5">
//                                         <a
//                                           href="https://slack.com/intl/fr-vn/features/clips"
//                                           data-clog-click=""
//                                           data-clog-ui-element="link_clips_exp_nav"
//                                           data-clog-ui-component="inc_header_exp_nav"
//                                         >
//                                           <div className="nav_link_label">
//                                             <div><span>Đoạn phim</span></div>
//                                           </div>
//                                           <div className="nav_link_sublabel">
//                                             <span>Lưu và chia sẻ thông tin cập nhật</span>
//                                           </div>
//                                         </a>
//                                       </li>
//                                     </ul>
//                                   </li>

//                   </ul>

//                 </li>
//                 <li id='nav_features_main_bottom' className='nav_parent nav_parent_l3'>

//                 </li>

//               </ul>

//             </li>
//             <li>
              
//             </li>


//           </ul>
          
            


//             </li>
//           <li id="nav_solutions" className='nav_parent nav_parent_l1 expanded'>

//             </li>
//           <li id="nav_fnav_enterprise" className='nav_link nav_link_l1'>

//             </li>
//           <li id="nav_resources" className='nav_parent nav_parent_l1'>

//             </li>
//           <li id="nav_pricing" className='nav_parent nav_parent_l1'>

//             </li>
      
          





//           </ul>
//         <ul className='c-nav--signed-out'>

//           </ul>

//       </nav>



//       </div>

//     </div>
//   )

// }
// export default Navsidebar;
