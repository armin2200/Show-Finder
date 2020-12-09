// import React from 'react';
// import styled from 'styled-components';
// import parse from 'html-react-parser';

// import Button from './Button';
// import notFound from '../images/notFoundPoster.jpg';

// const Wrapper = styled.div`
//   padding: 0 10px;
//   min-height: 200px;
//   display: grid;
//   grid-template-columns: 15px 200px 1fr;
//   grid-template-rows: 15px 1fr 15px;
//   justify-content: center;
//   /* background-color: #f0f2f5; */
//   margin-top: 70px;

//   h1 {
//     color: #172d5a;
//     font-size: 2.5rem;
//   }

//   Button {
//     text-transform: capitalize;
//     padding: 12px 6px;
//     font-size: 1.6rem;
//     border: 0;
//     border-radius: 7px;
//     color: #fff;
//     background-color: #344a72;
//     transition: all 0.5s;
//     cursor: pointer;
//     &:hover {
//       background-color: #172d5a;
//     }
//   }
// `;

// const Summary = styled.div`
//   margin: 15px 0;
//   font-size: 1.5rem;
//   color: #959dac;
//   min-height: 80px;
//   line-height: 2rem;
//   overflow: hidden;
//   display: -webkit-box;
//   -webkit-line-clamp: 4;
//   -webkit-box-orient: vertical;
//   width: 100%;
// `;

// const Details = styled.div`
//   max-width: 500px;
//   height: 100;
//   padding: 15px 0;
//   justify-self: center;
// `;

// const Details1 = styled.div`
//   display: grid;
//   grid-row: 2/3;
//   grid-column: 1/-1;
//   width: 100%;
//   border-radius: 7px;
//   background-color: #f0f2f5;
// `;
// const Image = styled.div<{ url: string }>`
//   grid-row: 1/-1;
//   grid-column: 2/2;
//   width: 100%;
//   height: 295px;
//   border-radius: 7px;
//   border: 1px solid #172d5a;
//   background-image: url(${({ url }) => url});
// `;

// const ShowCard: React.FC<{
//   name: string;
//   imageUrl: string;
//   summary: string;
// }> = ({ name, imageUrl, summary }) => {
//   let url = imageUrl ? imageUrl : notFound;
//   return (
//     <Wrapper>
//       <Details1>
//         <Details>
//           <h1>{name}</h1>
//           <Summary> {parse(summary)}</Summary>
//           <Button name='show Episodes' />
//         </Details>
//       </Details1>
//       <Image url={url}></Image>
//     </Wrapper>
//   );
// };

// export default ShowCard;
