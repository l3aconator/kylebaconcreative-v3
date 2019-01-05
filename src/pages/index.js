import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class Homepage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div class="main-content">
          <div class="home">
            <div class="page-hero">
              <div class="container">
                <div class="grid flex-grid--gutters">
                  <div class="col col--width__seven">
                    <h1><span>Kyle Bacon</span> is a lover of design & code.</h1>
                    <h2 class="h4">He also loves helping people on the web and breathing life into the digital world. He's currently working at TeamSnap.</h2>
                  </div>
                  <div class="col col--width__five">
                  </div>
                </div>
              </div>
            </div>
            <div class="page-list">
              <div class="container">
                <div class="grid flex-grid--gutters">
                  <div class="col col--width__six">
                    <h3>Specializes in&hellip;</h3>
                    <ul class="home--list">
                      <li>Frontend Development</li>
                      <li>Website/Web app creation</li>
                      <li>User Experience</li>
                      <li>UI Design</li>
                      <li>Interactive Design</li>
                      <li>Illustration</li>
                      <li>Print (yes, I still love this, too)</li>
                    </ul>
                  </div>
                  <div class="col col--width__six">
                    <h3>Has worked with&hellip;</h3>
                    <ul class="home--list">
                      <li>TeamSnap <em>(current)</em></li>
                      <li>United Food and Commercial Workers Union</li>
                      <li>PixelSpoke</li>
                      <li>Capsci Health</li>
                      <li>Health Republic Insurance</li>
                      <li>ClinTrialApp</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="page-work">
              <div class="container">
                <h4 class="h3">Featured work</h4>
                <div class="grid flex-grid--gutters">
                  {posts.map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug
                    return (
                      <div key={`/work/${node.fields.slug}`}>
                        <h3
                          style={{
                            marginBottom: rhythm(1 / 4),
                          }}
                        >
                          <Link style={{ boxShadow: `none` }} to={`/work/${node.fields.slug}`}>
                            {title}
                          </Link>
                        </h3>
                        <small>{node.frontmatter.date}</small>
                        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                      </div>
                    )
                  })}
                </div>
                <a class="button" href="/work">Check it all out</a>
              </div>
            </div>
            <div class="page-about">
              <div class="about">
                <div class="container">
                  <h4 class="h3">More about Bacon</h4>
                  <p>When Bacon isn’t workin’, he’s still slingin’ code in his free time or trimming prints at Portland State—soon to be his Alma Mater—with his handy X-Acto knife. He loves designing for every medium but especially loves long walks on the beach (true story!) and sunsets in the jungle of the digital world (If you could ever see it through those dang trees?!). Bacon has skills across the board, from illustration to marketing to coding websites and web apps. He has a knack for learning as he goes. He previously worked at Health Republic Insurance as the lonesome wolf marketing/sales graphic designer. He’s also been freelancing for quite some time, including at TeamSnap before making the full-time leap.</p>
                  <p>Bacon is originally from Yakima, WA, and now resides in the Portland area, experiencing everything that it has to offer, including, of course, coffee and a good microbrew with his homies. He likes to run and also nerd out over a good video game, film or TV show. If he had a superpower, it would be being able to watch every single "Star Wars" movie and not skip 1–3 (You know which ones…you know…with whiny Anakin.).</p>
                  <div class="page-list">
                    <h3>Bacon's Process</h3>
                    <ul class="home--list">
                      <li class="grid flex-grid--gutters">
                        <div class="col col--width__three">
                          <div class="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="41" viewBox="0 0 45 41">
                              <g fill="#33B99C" fill-rule="evenodd">
                                <path d="M5.57 35.293h35.577v-1.32H5.57v1.32zm37.338-3.1H4.718c-.512 0-.91.402-.91.92v3.098c0 .52.398.92.91.92h38.19v1.95H1.762V30.3h41.09v1.894h.056zM10.002 1.837h24.61c1.533 0 2.784 1.033 3.18 2.468H6.82c.398-1.435 1.705-2.468 3.182-2.468zm-3.24 4.247h31.202v18.65c0 1.837-1.478 3.33-3.296 3.33H10.002c-1.818 0-3.296-1.493-3.296-3.33V6.084h.057zm37 27.89c.51 0 .908-.402.908-.918v-3.73c0-.517-.398-.92-.91-.92h-5.68c1.023-.917 1.648-2.294 1.648-3.73V5.108C39.726 2.295 37.452 0 34.668 0H10.002C7.218 0 4.944 2.295 4.944 5.107v19.57c0 1.49.626 2.81 1.65 3.73H.908c-.512 0-.91.4-.91.917V39.94c0 .517.398.92.91.92h42.908c.51 0 .91-.403.91-.92v-3.787c0-.516-.4-.918-.91-.918h-.853v-1.32h.796v.058z" />
                                <path d="M10.74 16.068h7.105v-6.025H10.74v6.025zm-.85 1.722h8.865c.454 0 .852-.402.852-.86V9.18c0-.46-.398-.86-.852-.86H9.89c-.456 0-.854.4-.854.86v7.747c0 .515.34.86.853.86z" />
                                <path d="M22.05 10.043h13.243c.34 0 .568-.287.568-.574v-.58c0-.347-.28-.577-.56-.577H22.05c-.34 0-.567.287-.567.574v.573c0 .343.227.573.568.573" />
                                <path d="M22.05 13.945h13.243c.34 0 .568-.287.568-.574v-.57c0-.34-.28-.57-.56-.57H22.05c-.34 0-.567.288-.567.575v.575c0 .287.227.574.568.574" />
                                <path d="M22.05 17.79h13.243c.34 0 .568-.287.568-.574v-.574c0-.344-.28-.574-.56-.574H22.05c-.34 0-.567.287-.567.574v.574c0 .344.227.574.568.574" />
                                <path d="M9.377 21.692h25.86c.34 0 .567-.287.567-.574v-.573c0-.345-.284-.574-.568-.574H9.376c-.34 0-.567.29-.567.58v.575c0 .287.28.574.56.574" />
                                <path d="M9.377 25.537h25.86c.34 0 .567-.287.567-.574v-.574c0-.35-.284-.58-.568-.58H9.376c-.34 0-.567.285-.567.572v.573c0 .345.28.574.56.574" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div class="col col--width__eight">
                          <span class="process-title">Researchin’</span>
                          <span class="process-description">A design is arbitrary and can become useless if proper research isn’t carried out. Everything I do starts with research to develop a basis for my rationale: mood boards, user stories/walkthroughs, business comparisons and profiles, and the like. This is always step one of my process.</span>
                        </div>
                      </li>
                      <li class="grid flex-grid--gutters">
                        <div class="col col--width__three">
                          <div class="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="44" viewBox="0 0 28 44">
                              <g fill="#33B99C" fill-rule="evenodd">
                                <path d="M20.545 21.98c0 .056-.057.056-.057.114l-1.477 3.04c0 .06-.05.06-.05.116-.79 2.41-.85 2.754-1.25 5.28l-.45 2.81c-.23.116-1.13.518-3.98.518-2.78 0-3.63-.344-3.92-.517l-.46-3.78c-.17-1.66-.28-2.29-.91-4.47 0-.06-.05-.11-.05-.11L6.57 22.1c0-.058-.06-.115-.06-.115-.51-1.09-.798-2.24-.798-3.443 0-4.36 3.467-7.86 7.786-7.86 4.32 0 7.786 3.5 7.786 7.86.055 1.15-.23 2.36-.74 3.45zm-3.92 14.116c-.342.172-1.252.46-3.298.46-2.046 0-2.955-.288-3.353-.46v-.746c.74.115 1.82.23 3.24.23 1.534 0 2.614-.115 3.353-.23v.746h.057zm0 3.04c-.342.174-1.252.46-3.298.46-2.046 0-2.955-.286-3.353-.46v-1.204c.74.23 1.82.402 3.353.402 1.535 0 2.558-.172 3.297-.344v1.147zm-.854 2.412c-.28.057-.9.23-2.27.23-1.42 0-2.16-.173-2.5-.23l-.11-.345c.63.115 1.42.173 2.45.173 1.08 0 1.88-.058 2.56-.173l-.11.345zM13.56 8.895c-5.23 0-9.49 4.304-9.49 9.583 0 1.435.283 2.812.908 4.132 0 .058 0 .058.057.115L6.4 25.652c.568 2.008.625 2.467.795 4.13l.454 3.846c0 .173.05.46.28.746.06.115.17.23.34.345v4.76c0 .17.06.34.11.46.05.11.17.22.34.34l.79 2.06c.052.17.17.28.28.4.284.17 1.136.63 3.694.63 1.932 0 3.126-.23 3.58-.75.06-.12.17-.17.17-.35l.682-2.124.283-.288c.06-.118.117-.29.117-.46v-4.76c.11-.06.17-.17.227-.23.226-.288.283-.518.34-.747l.454-2.924c.4-2.41.46-2.64 1.2-4.997l1.532-3.1c0-.06.057-.06.057-.118.624-1.32.91-2.695.91-4.13 0-5.22-4.264-9.525-9.49-9.525z" />
                                <path d="M11.622 12.683c-1.99.86-3.467 2.525-4.035 4.59l-.114.46c-.113.46.114.918.57 1.09.056 0 .17.057.226.057.39 0 .73-.23.79-.63l.11-.46c.45-1.607 1.59-2.87 3.07-3.5.45-.173.62-.69.45-1.148-.17-.402-.63-.632-1.08-.46" />
                                <path d="M13.555 6.714c.454 0 .852-.402.852-.86v-4.42c0-.46-.398-.86-.852-.86-.455 0-.853.4-.853.86v4.42c0 .516.34.86.853.86" />
                                <path d="M5.143 10.617c.34-.345.34-.86 0-1.206L1.45 5.68c-.342-.343-.853-.343-1.194 0-.34.346-.34.862 0 1.206l3.694 3.73c.17.173.398.23.625.23.227 0 .398-.057.568-.23" />
                                <path d="M26.853 5.68c-.34-.343-.852-.343-1.193 0l-3.694 3.73c-.34.346-.34.862 0 1.206.17.173.398.23.625.23.23 0 .46-.057.63-.23l3.7-3.73c.29-.287.29-.86-.05-1.205" />
                                <path d="M7.814 7.23c.17.288.455.46.74.46.113 0 .226 0 .397-.115.4-.23.57-.746.4-1.148l-.96-1.95c-.23-.402-.74-.575-1.13-.402-.4.23-.57.746-.4 1.147l.97 2.01z" />
                                <path d="M18.1 7.632c.114.058.228.115.4.115.34 0 .624-.172.738-.46l.966-1.95c.227-.402.057-.918-.398-1.148-.398-.23-.91-.06-1.136.4l-.967 1.95c-.17.34 0 .86.398 1.09" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div class="col col--width__eight">
                          <span class="process-title">Conceptin’</span>
                          <span class="process-description">After mood boards and research findings have been reviewed, discussed, and approved. It’s time to move onto the concept. This is where the juices get flowin’ and the solutions ferment. Never settle for the first idea: keep exploring and iterating.</span>
                        </div>
                      </li>
                      <li class="grid flex-grid--gutters">
                        <div class="col col--width__three">
                          <div class="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="40" viewBox="0 0 39 40">
                              <g fill="#33B99C" fill-rule="evenodd">
                                <path d="M25.303 25.774l.137-.14c.045-.044.045-.044.09-.044.047 0 .047 0 .092.045l2.467 2.49-.33.323-2.47-2.49c-.05-.046-.05-.138 0-.184zm4.932 4.52c.045.044.045.137 0 .183l-.137.138c-.046.046-.138.046-.183 0l-1.28-1.29.32-.323 1.28 1.29zm-2.877-.555l1.69 1.7c.227.23.547.37.912.37.366 0 .685-.14.913-.37l.138-.14c.51-.51.51-1.34 0-1.85l-4.56-4.61c-.5-.51-1.32-.51-1.82 0l-.13.13c-.5.5-.5 1.33 0 1.84l2.88 2.9z" />
                                <path d="M33.705 5.67c-.64-.645-.822-1.198-.913-1.474l.867-.877c.18.41.5.87 1 1.38.5.5.96.83 1.37 1.01l-.87.87c-.28-.09-.82-.28-1.46-.92zM22.792 19.09l-.822-.784L33.294 6.87c.365.276.685.507.96.645L22.79 19.088zm8.904-1.06h-.32c-.548 0-.96.46-.96.968v2.213c0 .56.458.97.96.97h.32c-.228 1.48-.685 2.86-1.37 4.11l-6.666-6.41 6.39-6.45c.82 1.39 1.37 2.95 1.64 4.61zm-.137 2.997h1.78V19.23h-1.78v1.797zm1 11.896c-1.05 1.06-1.6 1.154-1.74 1.154h-.05L17.4 19.78c.32-.185.686-.507 1.143-.968.457-.462.776-.876 1.004-1.2L33.61 31.03c.092.23-.045.83-1.05 1.89zm1.87-.507l.13.23c-.05.14-.18.554-.96 1.338-.78.785-1.19.923-1.33.97l-.23-.14c.41-.23.82-.6 1.32-1.06.45-.507.82-.968 1.05-1.337zm.77 1.522c.59 1.2 1.18 2.35 1.55 3.135l-.09.092c-.78-.37-1.92-.922-3.11-1.567.27-.185.55-.46.87-.784.32-.322.59-.6.77-.875zm-14.25-.876v-.324c0-.553-.46-.968-.96-.968H17.8c-.55 0-.96.46-.96.968v.323c-1.642-.27-3.195-.83-4.565-1.66l7.396-7.47 6.53 6.97c-1.55 1.11-3.33 1.85-5.25 2.17zm-2.97 1.66h1.78v-1.8h-1.78v1.8zm-10.82.138l-1.05-.51 12.01-12.13.77.83L7.17 34.857zm-4.33 2.26c-.09-.097-.19-.19-.28-.28l1.55-3.18.5 1.06c.04.044.09.14.13.182.045.046.09.093.182.138l1.095.51-3.198 1.57zm13.75-16.56l.73.783L5.3 33.52l-.5-1.06 11.78-11.896zm-10.5 1.613h.32c.54 0 .95-.46.95-.968V19.04c0-.553-.46-.968-.96-.968h-.32c.36-2.212 1.23-4.242 2.56-5.902l7.12 7.608-7.63 7.654c-1-1.566-1.73-3.318-2.05-5.255zM4.43 21.02h1.78v-1.797H4.43v1.797zM3.98 4.01c.273-.276.455-.506.592-.737l14.156 13.51c-.137.23-.41.645-.96 1.2-.547.552-.913.83-1.14.92L3.248 4.613c.227-.14.456-.323.73-.6zm-1.19-.46l-.18-.184c-.732-.738-.823-1.29-.732-1.384 0 0 .046-.046.137-.046.23 0 .685.185 1.233.784l.183.185c-.09.092-.18.23-.32.368-.09.093-.22.185-.32.277zm14.065 3.643v.322c0 .554.457.97.96.97h2.145c.55 0 .96-.463.96-.97v-.322c1.917.322 3.652 1.014 5.205 2.074l-6.62 6.686-7.353-7.008c1.416-.876 3.014-1.476 4.703-1.752zm1.188.138h1.78V5.54h-1.78v1.79zm13.835-2.21c.137.28.32.6.594.93L21.148 17.52l-.777-.737L31.88 5.118zm2.877-2.9c.366-.37.913-.6 1.46-.6.276 0 .595.05.87.33l.364.37c.22.23.32.65.27 1.11-.05.46-.28.92-.55 1.25l-.19.19c-.32-.133-.82-.37-1.37-.963-.55-.552-.82-1.105-.96-1.38-.05-.14 0-.186.09-.28zm2.785 3.64c.046-.04.092-.09.092-.14.09-.09.228-.18.32-.27.502-.5.822-1.2.913-1.93.09-.83-.137-1.57-.64-2.07l-.365-.37c-.41-.37-1.005-.6-1.69-.6-.82 0-1.69.37-2.283.93-.09.09-.182.18-.274.32-.045.05-.09.05-.137.098L31.74 3.55l-4.748 4.84c-1.78-1.244-3.79-2.074-6.027-2.396v-.692c0-.553-.456-.968-.96-.968h-2.19c-.55 0-.96.46-.96.968v.692c-2.01.276-3.927 1.06-5.57 2.12L4.527 1.66l-.046-.046c-.18-.185-.45-.185-.68-.047-.64-.553-1.23-.83-1.82-.83-.36 0-.73.14-.96.37-.5.507-.64 1.52.46 2.812-.09.18-.09.46.05.64l.05.04 6.21 6.64c-1.51 1.93-2.56 4.24-2.92 6.77h-.64c-.54 0-.96.46-.96.97v2.22c0 .55.46.96.96.96h.68c.32 2.26 1.14 4.29 2.38 6.08L3.67 31.9c-.05.046-.05.046-.05.093l-.047.042L.513 38.4c-.09.23-.045.508.09.692.09.09.276.183.41.183.094 0 .185 0 .277-.045l6.3-3.135c.046-.046.09-.046.137-.092l3.7-3.735c1.597 1.017 3.47 1.71 5.432 2.03v.69c0 .556.45.97.96.97h2.14c.55 0 .96-.46.96-.963v-.646c2.24-.33 4.29-1.2 6.07-2.49l2.65 2.81c.04.05.04.09.09.14l.14.14c.09.13.27.27.55.32l1.32.87c.05.04.14.09.32.09 1.74.97 4.34 2.3 5.3 2.49l.274.23c.09.09.23.14.366.14.138 0 .32-.05.41-.19.23-.23.23-.56 0-.79l-.226-.23c-.137-.69-.73-2.08-2.51-5.4-.047-.095-.047-.187-.09-.23l-.87-1.386c-.046-.23-.138-.37-.18-.42l-.05-.045-.18-.14c0-.047-.044-.047-.09-.09l-3.06-2.908c.823-1.52 1.416-3.18 1.69-4.937h.64c.55 0 .96-.46.96-.97V19.2c0-.553-.457-.97-.96-.97h-.59c-.275-1.98-.96-3.825-2.01-5.485l4.884-4.93 1.78-1.984z" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div class="col col--width__eight">
                          <span class="process-title">Creatin’</span>
                          <span class="process-description">Pencil to pixel. Physical to digital. Whatever the final execution is, this is where I manipulate and design it. I explore with tools, processes, and designs until I find the best solutions. Design, code, illustration, strategy, etc.: all happen in this stage.</span>
                        </div>
                      </li>
                      <li class="grid flex-grid--gutters">
                        <div class="col col--width__three">
                          <div class="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41">
                              <g fill="#33B99C" fill-rule="evenodd">
                                <path d="M16.567 22.266l-7.39 7.518c-.34.343-.34.86 0 1.204.172.173.4.23.627.23.227 0 .454-.057.625-.23l7.38-7.517c.34-.34.34-.86 0-1.2-.4-.34-.91-.34-1.25 0" />
                                <path d="M29.07 15.035c-.512.517-1.194.804-1.933.804-.738 0-1.42-.29-1.932-.81-1.08-1.09-1.08-2.87 0-3.9.512-.52 1.194-.81 1.932-.81.74 0 1.42.28 1.933.8 1.023 1.09 1.023 2.81 0 3.9M27.137 8.6c-1.193 0-2.273.46-3.125 1.32-1.705 1.72-1.705 4.59 0 6.37.852.86 1.932 1.32 3.125 1.32 1.194 0 2.274-.46 3.126-1.32 1.705-1.722 1.705-4.59 0-6.37-.852-.86-1.932-1.32-3.126-1.32" />
                                <path d="M35.55 9.698c-.115.345-.285.69-.4.976-1.76 4.246-4.205 8.264-7.217 11.82-.057 0-.114.06-.17.116 0 0-2.103 1.09-6.536-3.386-4.32-4.36-3.865-6.37-3.808-6.484 3.63-3.27 7.72-5.91 12.1-7.747.34-.115.68-.287.96-.402 4.94-1.95 6.7-2.23 7.27-2.23-.06.52-.23 2.18-2.22 7.35zM21.68 28.636l-4.035 3.27c-.398.288-.796.46-1.25.46-.513 0-.967-.172-1.308-.574l-.17-.172c-.172-.172-.457-.287-.74-.23-.285.058-.512.172-.625.46l-1.876 3.385-6.026-6.197 3.354-1.894c.227-.115.398-.345.455-.63.05-.288-.06-.518-.23-.748l-.46-.46c-.68-.687-.74-1.778-.12-2.58l3.24-4.133c1.25-1.55 2.55-3.04 3.97-4.42.34 1.38 1.42 3.445 4.205 6.257 2.67 2.754 4.773 3.672 6.194 3.96-1.476 1.49-3.01 2.926-4.6 4.246zm.113 7.345l-2.67 2.7-4.718-4.82.17-.34c.57.35 1.194.52 1.876.52.8 0 1.59-.28 2.22-.8l3.64-2.98L21.8 36zM3.38 37.36c.513-1.264 1.536-3.33 2.673-5.453L8.78 34.72c-2.102 1.032-4.148 2.122-5.4 2.64zM2.018 21.29l2.672-2.697 5.455-.574-2.9 3.67c-1.022 1.32-1.022 3.15-.055 4.47l-.228.11-4.945-5zM38.96 1.033c-.285-.287-.74-.46-1.31-.46-1.306 0-3.864.747-7.842 2.354-.34.114-.682.287-1.022.4-6.48 2.756-12.39 7.175-17.107 12.8l-7.45.745c-.17 0-.4.114-.51.23L.25 20.658c-.34.343-.34.86 0 1.204l5.23 5.28-1.592.918c-.227.115-.397.344-.454.63-.06.288.055.518.225.747l1.14 1.147c-4.04 7.69-3.64 8.15-3.18 8.608.11.115.34.287.74.287 1.02 0 5-2.07 7.73-3.5l1.25 1.26c.17.17.39.23.62.23h.11c.28-.06.51-.18.62-.46l.854-1.61 5 5.05c.17.17.4.23.626.23.23 0 .458-.12.628-.23l3.466-3.56c.116-.12.23-.35.23-.52l.74-7.69c5.512-4.82 9.83-10.79 12.502-17.39.112-.35.282-.69.396-1.03 2.846-7.35 2.448-8.61 1.82-9.24z" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div class="col col--width__eight">
                          <span class="process-title">Launchin’</span>
                          <span class="process-description">The pixels have been pushed, the code slung, and everything is polished, approved, and lookin’ delicious. It’s time to get the work out into the world and I will be with you every step of the way. For example, the project could include helping with print vendors or pushing your site and content onto a server.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/work/"}} sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
