/* eslint comma-spacing:0 */
const athletics = [
  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0],
    [0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0],
    [0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0],
    [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0],
    [0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ],
  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0],
    [0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0],
    [0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0],
    [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0],
    [0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ],
  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0],
    [0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0],
    [0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0],
    [0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ],
  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0],
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ],
  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
    [0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ],
  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0],
    [0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0],
    [0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ],
];

export default athletics;
