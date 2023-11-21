import type { NextPage } from "next";
import LeftSideBar from "../components/left-side-bar";
import Audio1 from "../components/audio1";
import styles from "./index.module.css";
import { getStorage, ref } from 'firebase/storage';
import { getDownloadURL } from '../firebase/storage';



const SacralTrackFinalDesignCo: NextPage = () => {
  

  return (
    <div className={styles.sacralTrackFinalDesignCo}>
      <div className={styles.menuParent}>
        <div className={styles.menu}>
          <div className={styles.logogtype}>
            <img className={styles.logoIcon} alt="" src="/logo.svg" />
            <b className={styles.sacralTrack}>Sacral Track</b>
          </div>
          <div className={styles.items}>
            <div className={styles.btnGenre}>
              <img
                className={styles.iconComponentsvg}
                alt=""
                src="/icon-componentsvg.svg"
              />
              <div className={styles.hipHop}>Hip-Hop</div>
            </div>
            <div className={styles.people}>People</div>
            <div className={styles.people}>News</div>
            <div className={styles.people}>Events</div>
          </div>
          <div className={styles.rightSide}>
            <img
              className={styles.buttonSearch}
              alt=""
              src="/button--search.svg"
            />
            <div className={styles.buttonCart}>
              <img
                className={styles.buttonCartChild}
                alt=""
                src="/rectangle-388.svg"
              />
              <div className={styles.div}>
                <span>$</span>
                <span className={styles.span}>10,8</span>
              </div>
              <img
                className={styles.buttonCart1}
                alt=""
                src="/button--cart.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.leftSideBarParent}>
          <LeftSideBar
            rectangle2963="/rectangle-2963@2x.png"
            rectangle392="/rectangle-392.svg"
            icon="/icon.svg"
            iconLogout="/icon--logout.svg"
          />


          <div className={styles.storeTracksList}>
            <div className={styles.listContainer}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group@2x.png"
              />
              <img
                className={styles.bgBlurTitleIcon}
                alt=""
                src="/bgblurtitle.svg"
              />
              <div className={styles.area} />
              <div className={styles.area1} />
              <div className={styles.btnbuyActionsubmit} />
              <img className={styles.backBuyIcon} alt="" src="/backbuy.svg" />
              <img className={styles.unionIcon} alt="" src="/union.svg" />
              <img
                className={styles.listContainerChild}
                alt=""
                src="/rectangle-3881.svg"
              />
              <div className={styles.price}>5.18</div>
              <div className={styles.div1}>$</div>
              <div className={styles.iconShareActionshare}>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
                <div className={styles.share}>Share</div>
              </div>
              <div className={styles.iconCreateNft}>
                <img
                  className={styles.logotypeIcon}
                  alt=""
                  src="/logotype.svg"
                />
                <div className={styles.createNft}>Create NFT</div>
              </div>
              <div className={styles.artistNameFlexo}>Artist</div>
              <div className={styles.text}>Remix by</div>
              <div className={styles.remixNameFlexo}>Artist</div>
              <div className={styles.trackNameFlexo}>Name of track</div>
              <div className={styles.div2}>18</div>
              <img
                className={styles.likeStatesetLikeIcon}
                alt=""
                src="/like-statesetlike.svg"
              />
              <img
                className={styles.iconComments}
                alt=""
                src="/iconcomments.svg"
              />
            </div>


            <div className={styles.listContainer}>
              <img
                className={styles.maskGroupIcon1}
                alt=""
                src="/mask-group1@2x.png"
              />
              <img
                className={styles.bgBlurTitleIcon}
                alt=""
                src="/bgblurtitle.svg"
              />
              <div className={styles.area} />
              <img className={styles.areaIcon} alt="" src="/area.svg" />
              <div className={styles.btnbuyActionsubmit} />
              <img className={styles.backBuyIcon} alt="" src="/backbuy.svg" />
              <img className={styles.unionIcon} alt="" src="/union1.svg" />
              <img
                className={styles.listContainerChild}
                alt=""
                src="/rectangle-3881.svg"
              />
              <div className={styles.price}>5.18</div>
              <div className={styles.div1}>$</div>
              <div className={styles.iconShareActionshare}>
                <img className={styles.shareIcon} alt="" src="/share1.svg" />
                <div className={styles.share}>Share</div>
              </div>
              <div className={styles.iconCreateNft}>
                <img
                  className={styles.logotypeIcon}
                  alt=""
                  src="/logotype1.svg"
                />
                <div className={styles.createNft}>Create NFT</div>
              </div>
              <div className={styles.artistNameFlexo}>Artist new</div>
              <div className={styles.text}>Remix by</div>
              <div className={styles.remixNameFlexo}>Artist</div>
              <div className={styles.trackNameFlexo}>Name of track</div>
              <div className={styles.div2}>18</div>
              <img
                className={styles.likeStatesetLikeIcon}
                alt=""
                src="/like-statesetlike.svg"
              />
              <img
                className={styles.iconComments}
                alt=""
                src="/iconcomments.svg"
              />
            </div>
          </div>
          <div className={styles.rightSideBarParent}>
            <div className={styles.rightSideBar}>
              <div className={styles.frameParent}>
                <div className={styles.top100Wrapper}>
                  <div className={styles.top100}>Top100</div>
                </div>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/vector-193.svg"
                />
              </div>
              <div className={styles.trackCardParent}>
                <div className={styles.trackCard}>
                  <div className={styles.trackCardChild} />
                  <div className={styles.functions}>
                    <img
                      className={styles.functionsChild}
                      alt=""
                      src="/rectangle-8.svg"
                    />
                    <div className={styles.iconMoreParent}>
                      <img
                        className={styles.iconMore}
                        alt=""
                        src="/icon--more.svg"
                      />
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/vector-192.svg"
                      />
                      <img
                        className={styles.iconCart}
                        alt=""
                        src="/icon--cart.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.cover}>
                    <img
                      className={styles.jaanusJagomagi1489986UnsplaIcon}
                      alt=""
                      src="/jaanusjagomagi1489986unsplash@2x.png"
                    />
                    <b className={styles.b}>1</b>
                  </div>
                  <div className={styles.tetParent}>
                    <div className={styles.tet}>
                      <b className={styles.artist}>Artist</b>
                      <div className={styles.thankYou}>Thank You</div>
                    </div>
                    <div className={styles.likes}>
                      <div className={styles.div5}>1001101</div>
                      <img
                        className={styles.iconLike}
                        alt=""
                        src="/icon--like.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.priceMore}>
                    <div className={styles.div6}>
                      <span className={styles.txt}>
                        <span>$</span>
                        <span className={styles.span}>5.18</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.trackCardChoosen}>
                  <div className={styles.tracks}>
                    <div className={styles.trackCard1}>
                      <div className={styles.trackCardItem} />
                      <div className={styles.functions1}>
                        <img
                          className={styles.functionsItem}
                          alt=""
                          src="/rectangle-81.svg"
                        />
                        <div className={styles.iconMoreParent}>
                          <img
                            className={styles.iconCart}
                            alt=""
                            src="/icon--more1.svg"
                          />
                          <img
                            className={styles.frameItem}
                            alt=""
                            src="/vector-1921.svg"
                          />
                          <img
                            className={styles.iconCart}
                            alt=""
                            src="/icon--cart1.svg"
                          />
                        </div>
                      </div>
                      <img
                        className={styles.coverIcon}
                        alt=""
                        src="/cover@2x.png"
                      />
                      <div className={styles.tetGroup}>
                        <div className={styles.tet1}>
                          <b className={styles.artist1}>Artist</b>
                          <div className={styles.thankYou1}>Thank You</div>
                        </div>
                        <div className={styles.likes1}>
                          <div className={styles.div7}>1001101</div>
                          <img
                            className={styles.iconLike1}
                            alt=""
                            src="/icon--like1.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.priceMore1}>
                        <div className={styles.div8}>
                          <span className={styles.txt}>
                            <span>$</span>
                            <span className={styles.span}>5.18</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.trackCardChoosen}>
                  <div className={styles.trackCard1}>
                    <div className={styles.trackCard1}>
                      <div className={styles.trackCardInner} />
                      <img
                        className={styles.rectangleIcon}
                        alt=""
                        src="/rectangle-82.svg"
                      />
                      <div className={styles.iconMoreContainer}>
                        <img
                          className={styles.iconMore2}
                          alt=""
                          src="/icon--more2.svg"
                        />
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/vector-1922.svg"
                        />
                        <img
                          className={styles.iconCart}
                          alt=""
                          src="/icon--cart2.svg"
                        />
                      </div>
                      <img
                        className={styles.coverIcon1}
                        alt=""
                        src="/cover1@2x.png"
                      />
                      <div className={styles.tetContainer}>
                        <div className={styles.tet2}>
                          <b className={styles.artist1}>Artist</b>
                          <div className={styles.thankYou1}>Thank You</div>
                        </div>
                        <div className={styles.likes2}>
                          <div className={styles.div7}>1001101</div>
                          <img
                            className={styles.iconLike1}
                            alt=""
                            src="/icon--like2.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.priceMore2}>
                        <div className={styles.div8}>
                          <span className={styles.txt}>
                            <span>$</span>
                            <span className={styles.span}>5.18</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.rightSideBarChild} />
            </div>
            <div className={styles.topParent}>
              <div className={styles.top}>
                <div className={styles.head}>
                  <img
                    className={styles.artistIcon}
                    alt=""
                    src="/artist@2x.png"
                  />
                  <div className={styles.title}>
                    <b className={styles.artist3}>Artist</b>
                    <div className={styles.youAreAmaizingContainer}>
                      <span className={styles.txt}>
                        <p
                          className={styles.youAreAmaizing}
                        >{`You are amaizing! `}</p>
                        <p className={styles.remixByArtist}>
                          (Remix by Artist)
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.buttonMore}>
                  <div className={styles.div11}>
                    <div className={styles.ellipseParent}>
                      <div className={styles.ellipseDiv} />
                      <div className={styles.ellipseDiv} />
                      <div className={styles.ellipseDiv} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.wave}>
                 
              </div>
              <div className={styles.controllersfunc}>
                <div className={styles.buttonPlayPause}>
                  <img
                    className={styles.buttonPlayPauseChild}
                    alt=""
                    src="/rectangle-396.svg"
                  />
                  <div className={styles.iconPause}>
                    <div className={styles.rectangleParent}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.rectangleDiv} />
                    </div>
                  </div>
                </div>
                <div className={styles.btnBgParent}>
                  <div className={styles.btnBg} />
                  <div className={styles.btnPlaylist}>
                    <div className={styles.iconTracklistParent}>
                      <img
                        className={styles.iconTracklist}
                        alt=""
                        src="/icon--tracklist.svg"
                      />
                      <div className={styles.playlist}>PLAYLIST</div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.buttonSame}
                  alt=""
                  src="/button--same.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SacralTrackFinalDesignCo;
