/* eslint comma-spacing:0 */
const billiards = [
  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0],
    [0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1],
    [0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0],
    [0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0],
    [0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ],
  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0],
    [0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1],
    [0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0],
    [0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0],
    [0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ],
  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0],
    [0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1],
    [0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0],
    [0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0],
    [0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ],
  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1],
    [0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0],
    [0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0],
    [0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ],
  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1],
    [0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0],
    [0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0],
    [0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ],
  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1],
    [0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0],
    [0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0],
    [0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ],
];

export default billiards;