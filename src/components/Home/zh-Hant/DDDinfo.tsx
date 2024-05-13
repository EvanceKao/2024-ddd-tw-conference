/** @jsx jsx */
import Link from "@docusaurus/Link";
import { css, jsx } from "@emotion/react";
import DDDlogo from "@site/src/assets/ddd.png";
import Image from "@theme/IdealImage";
import { memo } from "react";

const imageStyle = css`
  min-width: 172px;
  min-height: 162px;
  > img {
    width: 100%;
    height: 100%;
  }
`;

const DDDinfo = memo(function DDDinfo() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 48px;
        background: rgba(118, 109, 148, 0.4);
        padding: 60px;
        justify-content: center;
        margin: 100px 0;
      `}
    >
      <div
        css={css`
          display: flex;
          gap: 24px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        `}
      >
        <div css={imageStyle}>
          <Image img={DDDlogo} />
        </div>

        <p>
          DDDTW 社群致力於推廣 Domain-Driven Design
          此一風行全球的方法論在臺灣扎根。六年來，我們已經於全臺舉辦了上百場活動，吸引上千人來理解甚至實踐
          DDD。
        </p>
        <p>
          台灣領域驅動設計社群將於 2024/09/13(五)
          舉辦第四屆「臺灣領域驅動設計年會」，今年年會的主題為：系統設計與社會技術年會（System
          Design & Socio-technical Conference）。 圍繞「遺留工作負載（legacy
          workloads）」和現代應用程式的演變，邀請大家共同探討這些工作負載在當今商業環境中所帶來的挑戰和機遇。
        </p>
        <p>
          討論遺留工作負載的演進，以及如何應對它們的變化，並探索系統設計的複雜性，重點考慮社會技術因素對軟體開發決策和執行的影響。期待深入探討企業決策者和一線執行團隊之間的合作方式，以實現系統設計和開發的目標。
          歡迎贊助我們，讓技術帶領業務前進！
        </p>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <button
          css={css`
            border-radius: 4px;
            padding: 9px 22px;
            background: #9ad7eb;
            color: #242526;
            font-size: 16px;
            font-weight: 600;
          `}
        >
          <Link
            to="/sponsor"
            css={css`
              color: #242526;
              :hover {
                color: #242526;
                text-decoration: none;
              }
            `}
          >
            企業贊助
          </Link>
        </button>
      </div>
    </div>
  );
});

export { DDDinfo };
