/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "../Components/css/animate.css";
import React from "react";
import "../Components/css/theme.css";
import "../Components/css/maincons.css";
import "../Components/css/bootstrap.css";
import bg1 from "./img/tyre.png";
import bg2 from "./img/tyre2.png";
import Service from "../Components/Service";

const Main = () => {
  return (
    <>
      <div class="page-banner home-banner">
        <div class="container h-100">
          <div class="row align-items-center h-100">
            <div class="col-lg-6 py-3 wow fadeInUp">
              <h1 class="mb-4 capitalize">TYRE SAFETY FOR ALL DRIVERS</h1>
              <p class="text-lg mb-5">
                We provides a range of tyres which are compatible with various
                make and models.
              </p>

              <a href="#" class="text-secondary  btn-outline border btn ">
                More Info
              </a>
              <a href="#" class="btn btn-primary btn-split ml-2">
                Watch Video{" "}
                <div class="fab">
                  <span class="mai-play"></span>
                </div>
              </a>
            </div>
            <div class="col-lg-6 py-3 wow zoomIn">
              <div class="img-place">
                <img src={bg1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 py-3 wow zoomIn">
            <div class="img-place text-center">
              <img src={bg2} alt="" />
            </div>
          </div>
          <div class="col-lg-6 py-3 wow fadeInRight">
            <h2 class="title-section">
              We're <span class="marked">Dynamic</span> Team of Creatives People
            </h2>
            <div class="divider"></div>
            <p>
              We are customer centric service provider and we also offer
              re-trading & re-soling of tyres, on-site delivery of tyres and
              fortnight post sale services.
            </p>
            <div class="img-place mb-3">
              <img src="../assets/img/testi_image.png" alt="" />
            </div>
            {/* <a href="#" class="btn btn-primary">
              More Details
            </a>
            <a href="#" class="btn btn-outline border ml-2">
              Success Stories
            </a> */}
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-5" >
        <center>
          <h1>Our Partners</h1>
        </center>
        <br />
        <div className="row" >
          <div className="col-12 col-md-6 col-lg-4  col-md-offset-6">
            <div className="card border-0 d-flex justify-content-center h-100">
              <img src="https://lh3.googleusercontent.com/fife/AAWUweX-LkOtH42qvJaNUcdcFeExwWZmJJLq0ldy-x0ggt82Qziue2C3lQmpPT6rq5X_CyUCNi2kms6r6EsUiXa4S3VORRBFibd1Bmq0FMnGHQ-Y-723T5jdoRBCLiPZ7pOL5pJ6uSwBIiZQYnh-3Zwzcmj7g2GJdGvSC5r68Hkvpy940EP_NKf5-1b_9Ni_6l1Wce70VnTS414K3KteqZ_y1YZ_R4-xp8lhbfHohEhm0mQF1dYF58y9m9qVCLAhiVKT_pYXECfR5g53iTWOHdBp3sHHzNtc6MO4G4B6nLYTzeyiryzI2YuznWNTVnGMi92CdglxyiB43FVljZFXZTUayPUXFFqMMLxVlZk05ESgNPJCwec_zqd4Sh2PcKShqPLtEPIsiyNWtaKsySCIx47SY-pe5ULevBBi-nNHiqq3TNqXL5chUbgdpjuK3XXcgbm6Nc-UJ6BcWZ3EIXWXdy9zO3qNKCJBMlYvDDSkPxTA9OkB80KMvuIvkeNzymcDBL7sZP-QtQSWiahnH1509Zj4vPsSt_yesBDaUxO2RoNRY9wMTST7CpcflB_g1CKeZMPYtomA_l1wh67BfIBfe6HPBvijNsI5y1hPc62ORcyt8o9UcAjFJEUQF_tRQ9PFTIW_qfdo-RG1P1rwRvGtuV8nwFGLyrXsYXR1-rWsNAVK0Fuagn3tlPMfGTeWu4v9l0QMVIu0uAQseeBETwIZK7MdWn97HngqYhE99-tQahSKblFF66RcX-mmqnHF-D5319AOrIQemMmcnsuuiuWcY0pShZqK-YggLPS5qrp6Dn-OzNCPpLjBPeeU1y2uyzsKkspS4Awv0bWNiC33s_Smbt_Otkuw-9xusF9DrCsYulR7CMx86abWgyn0BzaJZswhr_6AQu3_MybWfB2sJWVFTjnBAyl_eibyqOrbeAlNbBUnBvkbjB7nd7kOw5Ujcfd9Y5qofMCdD9uo_gLW1knYUT9401-eo5soNh-u9mrNzRm2YvAc4v67Bb86A6ruPeceexEs6rCxPcuKzzD3oggB-gRK2dOZ5tLoO8os8T4vDkC1Z4PUE9uX8t4dzn2tBt_zMExNfk_PIUpLtpZwbcjuH_Cxic1JZfvRrbFPdO7KZnKiv8CspOE5yIc_l6pSU1HfR_gvscs_kkmDKGQOLqlXLYPtUPYi4zPjwI5WA4WLb-4pZeJjl6ISg2azW2hL-1S5dY2rV_CnKpBPnca_evfL55bb6h80IgDlCW8HcP8H3LblzISRk4BGQT2_t6Jnn4_Q9C1c-YJR_bfshQu2Au2vGk6rC2-XA7_XD9TPNDJWA3qiGoTVfw-C1wpK2GFYRJ1_wbBougA_l4ei08JPKwS3sCAUyx6-5-mSmfILqwBYk-ZFD4GAjmjonOip=w1920-h942" referrerpolicy="no-referrer" />
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card border-0 d-flex justify-content-center align-content-center h-100">
              <img src="https://lh3.googleusercontent.com/fife/AAWUweXR0b2Thlqea4YFfGUmUXKGUF4aVnd39hcjYjn2OmjOin4OJpG9FtZ2maDOjEK1HgZXzF-QDqbROxHj2XaxNTLTunA8cl2O6ptTffQ3Ntyxgl489EMdx4tJ2TLVobRRp1IMI9RWsDuqpmyCCybmucAoEpjPeVZDfDQ2KllI__Th9jsRat4BzQjrbFyBrydlmo1ebQMVJ-_nIlIlJgqhGicDCP3ydoZdWj5OszWtMXnxMtOtH_U5PIapqniN6HaXR_QZ5jVYHkVG4iaWoi4-rZh8dB4xiutyi1c5bLoeJnhMJcVsJ0MUeYLlVnoFtdB82_XgAlhgdsEvUx5x0bism144DC1dAn9ZkEtfKuVN3jcRgf8CPdYF06Hd7XR5ePGf3N7F-iazog1u2tour9ihepVC9seK-YPP7relPwsmYGMLVSBOXOepmu89LqPN3a2prNeJWUmYHGOtlsLMEM57a_uLRsF5rdpKfrq7_Y0evrtAeP1yDNXUV_PpMjikzQ6Drt0_E3K-YOO7CCJVMKHHEioYUOImZE7TixbnoYnk8Kf6zfFXT67cPR_kOtiQamMPs-V5qkwdp3Dbft_oKuJLtm9k6W-oA2ZMXOiiQgZcd_WUjcdAhuI9iccAMhcdv9hRLUx7Cq-U_oSsVPQTp8sivjz0Qe-WA8GNkTUKoH-MW9qF7R0OTg5HtHD9VvBPymo8NScz7GU2otdAJSDYDSTqWhFrcwW5fPrwQXgHC_0b0Wh1eXiyBeXnvrdtSTkL_iuX170Ctzyx03tR6JpliDE32XkjLC4oh4nXd23BwV_JEt2st4PNqchPRsFBUwrtclL2tcYl4xcnheuehpXjrPaUFD64dPDDvZycIWTaxXDRmWzTJZ2CxBEQoYuWXyreaAbslIZnjdOHvj-dLIvDp5kRdHmP5eM9dL3jk_mhDRa7q3LtIc7xAasyMRgo0EO6jV8ZnTFStp3JZd-4ce5OZJwGuT9e-mYLPtI0zMvVwj5w6PynA4mCveC27x9QFpPuY2pDpB12tuvG7bA94v3pgEiHLMWGx5gXHb4rCV70ZkWfKGW4msNj0QGwcwAUsks8Mbb1zkNoe7Sjour-fTPR8E00v9EQg7wzjE7nZoYFRZFwq4Y9eKVxfJWyMUa4HPfZFCLfuzJxqif0d7WTALvbt5F2ny2PyAmzQguNQrUX0zghQIWbRsmnBtBWuPBf6wIN2kdtRV2iZ_nEL4JXmSzXgGHb9HKWKREyG0hkiPTZwmmYAfx2qHMH_MIVECUs-3Ko_yQcjxsMF96L1NemcUXz1vTt116-6OvaPDlex91v7F0KWJnEWVxaGyZme5-u1p93XeVeqoSzc-oY6Lm9te_RtPoQAZpUC7sAnBijD8s4ODxk-qheNrCbw7o6=w2000-h1250" referrerpolicy="no-referrer" />
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card border-0 d-flex justify-content-center align-content-center h-100">
              <img src="https://lh3.googleusercontent.com/fife/AAWUweUrQ25J5BwA0yOck2frQddiHpmrIz9VP_BgVqETy_WbNSFKlLrPF99shxaS_DulJ3bCO8fci_YS6lqoN-_348VucUZBenF5lypiV3qYKvexft6f3Uj5gHrNE5wqvbR2g95c8ct5VgLALXjHN3Eiw89RGrNUmjFSmC6NkIpkdyYXaAyy1OsE3Ir85y_nXjLYyIBfB41YtWXIqUv7p-Dc5sQz8RFYKxczGx71hvwERneDJMNAeiikdsuHmMWp97DEEaNH80dsIdrPWzvDnVxWaHIWZwNVdUmjgdpP_E9gYrG1JHoH65pg-iL7z2B3x95zfFpZdeSbD9_aVsV56tSmqm9AMjXtxIvisoMABw6h-eSdIrVx5k5kVVq7KReWLrnw75em4mWC0Jdkcyv7q5n8QfIv9dCEt8wdVk9mtamsmQqT-mHnIRCqYRm4nhCXIlVHV1-k0rBlIy3qu87h4fxMPPylYdoPZEIZWCHwbwNH2Bgu7OluFJapqvIv0O-fv2Tj0ekNQywUS-uZ_YQSW29CudBD1l_nIfb-hY8evac5pT2pz74FTPIQUSy5z1tFJSlVtv9nUeV4WbrgLBOmj4EBtqR-yKFm16CzvlpqD4kiYL8zTJzVlttgpxVicWwb5NsqBTp1HfSesjIoKXD00_Lq--CbiSe7zlwaTDC4SN-7xHNyD4KSL7JhH6dXX5TWLXFE-fDs16_by4SJILfBuT7ek4VhXsKt79zrrXC0KLWxX5t9rZKxrKImXK2cy8DvrzhqpvHQEtgMGHTs_DQrQ45U1oZowjve2HtCQ4kgzTrfhCpq0-FFNW4C95TV5FeKW3kGZKXVCGx58xHBlqS6HZWQSoY6HSQUoUjyr4jFnn7K2wPx98HkWOq9NDKbDN8UHWmwg8rCcQlVuCeiRIy-37faTezvthRHag30TunTHlJDNouJz0SnBW9dJjQXmdjG2DN2hXbqZNxvzLL7QlzhAKHqXgtFJi6YtuSEiD9ztxF-QZHfp5AEVAh1UybIGI2hGQY4iDKqddb3lJn6zRlN6UO2QkFXMs4sDJn52sIMfZmMexPJe77oAUR6AOxMDi9D5pYBP4hKYlzRFq6VjigZp0i3MzbKzZNj4B2tEKgueWNIJWnHw6QkNE0borwp7knXWJC2y6TDW0p4vmgpFBg6i7NvTeHSvCE5vVF3Vv0DUixVceR0lgcXkC_9niWam1w5DHItEoz-mlpdji0bKHSkxXJgRIXnYfv_bsg_tzrCRPZ5QJjuC-DbIqX2x_FsipjtvSJo8RijiC0Lo_EuT9V2VBF1TybqbGAByO0Fas7y9Ic0WlLK4r4Q-RilFcQwQaIZJ307t_icE1H8b62m8AiFUrBFeNjvFjJ7ZP8SDYk-loQxUNZABMe5xUtw=w2000-h1250" referrerpolicy="no-referrer" />
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card border-0 d-flex justify-content-center align-content-center h-100">
              <img src="https://lh3.googleusercontent.com/fife/AAWUweXCtV9vZBxS8eHNyJqrXGro27nUc5txlehzTJb3YfUuzyk0WSXdNTYMMP78f2H9YFzaMaoDx2zBYg8OYGB-rPD9IYNSgcsd1tvqOiyripHk6aKRW8Cd71IoZMV8mzrnC-ER_H1GPZpV_x5QC5Qq1RgYaAUcEe7dgLGgBLdaI1l2YI9FkHLei3C46-o8mu5J14k7JMkF-iLURs9bZr_yiY2Pmo3d033jqtG6rnC9Xc7tjBqcmQc8ScXAYrDGAqbpGT0DWEpE0YVZFLRINSmEqo9sHZ2-ghHLs0Ween0NdNVwatj6sFsLM2zLa17F1_MEKznzYusMrC2B809ccWT5jE3A0ecc5n9WuW42t3lOZ0TyqRX1SvTSF1xE7TtQxfjJELzwAl2S39DclO9NYyMhi_w7mV713suNS9Pav2XjbpsCiqHrFVWHCIxOpTz_HT3jopdbhNMythp4yBW79zWU89l3iV90rjsqIUr644abnkqMn3IMV8AtiYpJqI0gIZXAKqQVAHp5n1z4POMXg4OpIpYGa3mnA9Fh-cYSuQinS6A6pvY6y6bZctTKHSRDvYV2a7mlzCjEiY9O9cJtWV7F0qmYv_vI7NgDkrAW96VrUcnQ_Ldcs7z0JJyjgcXQ15VyloG_0XtJGdfLiSq1j_o9m-ixiwPTH7TeEzHRLlWzsYXAMO_t5czTxCRXI8Sj2fyhSnyvtEHsRvvtniUluvne3cs5hB_gR8JVbcB7vNZR1VX6teax1qKQYMPmA-gLds5Bd641lnwEFnTgrCg4XIzCZAibBYbSjSe89ag1X3wg4igkNFOo7K-Tne84vHvekWMAtDSI7fn0ECNCAQ9zejyXn4QjzFTaS1kGfuWEK8JIu1E5pe1TNeUD14Mtu3AIxIwMLiTEKT4g8jERKbja2-gJMEvd57_5UtGDd-VZBRdsu4xkcyhSNIFpOXWcs1qtx_Qnnl-pzU7kVkb-1nYCvmcTl4dgNbcAqQvgcrEOqKU1_ir_hn2DX_ubzvk_iJHBPH5FU4UGiAMkAeq8xIFYX41kXBXBSzS2-YR6mbuJFYpBVhTvDAlZSCZPtyZFX6VpTWftPrW-XL_o4q5iucGD3SDUNjcXCouVbJrNB9ZW534vmwXD3Rgef7fzDzhzbnYzjluugpjAJ5jFXiUmCTHqN0JhxJBPONt6iAFxSWM4tTP_TOlTjfi6FhAMoQH0fVv6LP_4hQI94Vhu3731slG2-35pDWukVPCHpBLhF5Z8XQU4Er5Y3n5Wsp9ihJCYrp2BEP3936gPiUXAfbLAyhBSPU6pwqmrvuNQ-ErGkmJug-qvluIsTWn5Uo_AC-Eqvys3NtgHMh4rabLwMYA_-n3sEfzf3b-j248iudTQWU82ey1EsyNUcRowuVfe=w2000-h1250" referrerpolicy="no-referrer" />
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card border-0 d-flex justify-content-center align-content-center h-100">
              <img src="https://lh3.googleusercontent.com/fife/AAWUweU0aZBvA-o30guhUp86oY_38ZS5RhQFcVymg6AKmSP0yV4orhTVfB-G11DjlzFGjhhmtx7_HKNtV-erbPnl2QkZzC3aBwG3vR2CJACqNSuLz61n6c7CLF99LbERqcTZyLyhA9QcQzMgdNvTXFDvJ_5Bdmuw4f2OWGwVNTqXZw95uZlo84-Wwp_pRaG7MPgp1Jz-i-6PdDlk1qugEUtoZn3Lo_ns5fKoYpOhI8HXQNvMECG0MxJB51b3AQeY6nI3OJyFCnYLWWSiWz-8J0aGdnb4MotkwdbkjXshkan3E2QlPX5_l8RDonxlXSBNm8G4K0dK4DJ7beocTvUKrFWlB1cEPnL-aDsAaFm7ZVKrEvq9Ha4RwOdN_GI8zG3xdjDsO8bMg4HudecW0poasXtdJlWiSwoiOIpUiA0uIRHOjlKta3PGLyXTXW3RmGFAHwY9wvYY4z50SvtqK-iSmbsucua0mGfTnbuD3DRXKA4p6s-8FlUNJndhwq5Ceovp_G9ZGB5iEUbii5PftpHOgaNJYRopc6X_xYM8CTPrSK-Q9AIcBH6b27iFb5xwOolTh6ok0tk1kadsdjcJPH7o-0hEseyt4YanXmN_143N_CT2M5rrS08vAoxMxZLpZcr0KKEKdefNoOdgMsPHuy-uF31rEDy_-OmSoyWicMrR4pBGYpONKLJxWihcKWjlyqd3fcWlCoTju9BreGpPVODDYgk1WoEJzQJjKHqR4zhClVp8wvImvCuPWiGUVwahWTA5qxLN6hxyJG8Wht3RgR8aJ1Sa83oWEg3d7q9IIAqhQMZx7NHEJ7AEaVWo_zWRcyLY8y1OmlkuQ4Bwi5egGsHalg10igQ69zNPU6T1oQWPaMLy37vz3pbb8KECGLGe_f7_FOjuai32KTIdsIZ-fUjHXhD2No0D_fbwhN9CC_A5ZY1EtsiQKdTOnadlnnijwfud2eZvsnLgYjsyc6duQG_SaEQhNn39p6gCzKo7hF9gsszLcGpI8qYV7VE6nccf44t25SVefxEoUU0UQU39o-MdVbpaQB-S4RwPWc0VBd556yodKOxN4Ltspw_v_kve37C77nNLcEUqWDIrHHUZWBtVZM47qz0JqbeL-Qf69SBn__NTzAXIeFVkaJyRAy6kj0advI93vSUoD5tHPaW9_9XI9lR_DoKHAeJ5rAuxfSDlX3lkeF_a691UF6vbcrjdOBZT19V1WEpTJRfDai7l3rpLKv3oSRMfz2jNkeanoA9fvRjE1ZoUlJJQZ4oKy_q63yaYAAlRshn7avocDSutODqS3ZObmsc86JZzZcz_edpvlhhKG3m3qXUSPkpgvzOyGmGc0dh6HtiBYPaaIuSWzjW6Q5SHAYOlmD4eynt5afLY94FLNtwPC_zvgJyG=w2000-h1250" referrerpolicy="no-referrer" />
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card border-0 d-flex justify-content-center align-content-center h-100">
              <img src="https://lh3.googleusercontent.com/fife/AAWUweV2pdLAyJhnmZ42N6NCFZNpUI4APxY1u3lEnKEBDfxI6pBPNMP49O-tNGW4VDn-1nT_TehJDb5SbKJUusk5xBIML41YNREyVE-EBKwu8d8KsTr5JvIqAIywTwHb6_qXW32VT1gl08P1rs9wbETgCwGTeH-hLWp1MpQui5bLRttCc-DH-MdhWSmVTUGvsnz_BMk7VwUceIFq5VHoVT9rJe4-dIKKs7O0xLaRzO0_bPvwtyALc5tvaNUsKw-YnT7slhzecHt-bXekP9zkbvUtxQ6oQhcQmJUPaikxJ3oTHU8Qqrmev3fi7Hep9j9DfRhG7MtjzaHJSHZks1nh0T8EA39xLW1OSIioRwa0dITP1vu5qc1oOQYbtB4iTyZlymkZHdfiPnFX9mlzlUuSP_BQAt9Dt6fQSHkbVVeAQhP3IB_08KA1QnMd0xAqjBFt8HuKzWM52bRSJdaL3g1Hwp6fzfAlKIZAXG_9uTWUSGFXgEGOXgqZfndyc5UtP-QwWBwG4quWzh9A2ha3iev488nRaNOJZCnbRXTLKOh6Xvjx_1yIXP42xFJJIarhFfEWpHtBkWotWwGEA7O8sTsEmB3SF_ebdZkrXTbX5gvLoSWHOyoUdEtZVsLz8i7GWrTyOJVDHoKB31aT9lyL-3sM5jhiIMbJj4v3Lhx_hJmEdiURP5bxbHBruavaM5Q1bvAxiOQAgQRrJTz1YEs80vgt6UBCZ0tCS4k__OzyJVwS21ywjbXoxpdkcyn364O5WrULx_aZelHZuIIdf21SccMqLb4pcFPxALTFPm3bDh3iIc_Roc40Swp3TN1dxJKBaLUbzFrg0oMrZ88tzupckWX84pRlclro8fqGXEdnYAJ-1_PsVCFMx959Tua4pDgU9k_m8djHFVjBQEgekaP91uQlxyulbdWt2c4-jkuKfCk-EINmnbQh1s4SdV2rN3Cu6b9HNgVF0f6fmjzd0lSbAg3oBx3zpZnLtDqipgrlPPuqm5uQzrA3GcmhvY7AvCCn93FaGOiYI0owIWdE5jKBpnAJorZpY3kqXc1eSsAppqts8lLsbVIbvEn59C7LDFQDv0P2SuujpKW1jpv0C5IZ4OmaSTeAfT2ClY9l-l-YXTWNF6REFyKVlDVX4KjFCMRfXUVQuLwGaGlwPHvqcjzmtTJT8v34iXow0ijnYktzGIA6nLdgkTs6zWYDjCKgUmU-ISSBXUZY5TxP-cqvhAif0DaV5IDC6WBc5U3pCY77GA-StErtfQzh3rGXyG8NrdOe2esd3x13AGQzr4OZ8Vz2IikAY2Gw1_0ctfidCpp9kG1VI_5RxaaLB750ndCZD6_tiSoCqD-UVeWmTmkiH0MoB1dIsjXa-GYyUkzD3xzhCehPKTerLR56JuqCNv7B=w2000-h1250" referrerpolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
      <Service />

    </>
  );
};

export default Main;
