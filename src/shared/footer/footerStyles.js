import styled from "styled-components";


export const BottomWrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content:space-evenly;

    .botLink {
        // padding:1%;
        width: 10%;
        text-align:center;
        font-size: 20px;
        color:white;
      }

    .botBtn{
        width: 170px;
        margin: 0 20px;
        padding: 15px 0;
        text-align: center;
        float: left;
        cursor: pointer;
        background: #000;
        position: relative;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
      }


    .BorderTopBottom:before {
        content: "";
        position: absolute;
        width: 20px;
        height: 3px;
        top: -6px;
        left: -7px;
        background: #000;
        transition: all 0.5s ease;
    }

    .BorderTopBottom:after {
        content: "";
        position: absolute;
        width: 20px;
        height: 3px;
        bottom: -6px;
        right: -7px;
        background: #000;
        transition: all 0.5s ease;
      }
      
    .BorderLeftRight:before {
        content: "";
        position: absolute;
        top: -4px;
        left: -7px;
        width: 3px;
        height: 25px;
        background: #000;
        transition: all 0.5s ease;
    }
      
    .BorderLeftRight:after {
        content: "";
        position: absolute;
        bottom: -4px;
        right: -7px;
        width: 3px;
        height: 25px;
        background: #000;
        transition: all 0.5s ease;
    }

    .botBtn:hover .BorderTopBottom:before,
    .botBtn:hover .BorderTopBottom:after {
        width: 154px;
        transition: all 0.5s ease;
    }

    .botBtn:hover .BorderLeftRight:before,
    .botBtn:hover .BorderLeftRight:after {
        height: 57px;
        transition: all 0.5s ease;
    }

/* media queries */

@media screen and (max-width: 780px) {
  
    width: 180px;
  }
  .botBtn {
    margin: 15px 0;
  }
}

`