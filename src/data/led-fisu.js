/* eslint comma-spacing:0 max-len:0 */
const led_fisu = [
  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ],
  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,2,2,0,0,0,2,2,0,2,2,0,0,0,2,2,0,2,2,2,2,0,2,2,0,0,0,2,2,0,2,2,2,2,2,2,0,2,2,2,2,2,2,0,0,0,2,2,2,2,2,0,0,2,2,2,2,0,0,0,0,2,0,0,0,0,2,2,2,2,2,0,0,0,2,2,2,2,2,2,0,0],
    [0,0,2,2,0,0,0,2,2,0,2,2,0,0,0,2,2,0,0,2,2,0,0,2,2,0,0,0,2,2,0,2,2,0,0,0,0,0,2,2,0,0,0,2,2,0,2,2,0,0,0,2,2,0,0,2,2,0,0,0,0,2,2,2,0,0,0,2,2,0,0,2,2,0,0,2,2,0,0,0,0,0,0],
    [0,0,2,2,0,0,0,2,2,0,2,2,2,0,0,2,2,0,0,2,2,0,0,2,2,0,0,0,2,2,0,2,2,0,0,0,0,0,2,2,0,0,0,2,2,0,2,2,0,0,0,0,0,0,0,2,2,0,0,0,2,2,0,2,2,0,0,2,2,0,0,0,2,2,0,2,2,0,0,0,0,0,0],
    [0,0,2,2,0,0,0,2,2,0,2,2,2,2,0,2,2,0,0,2,2,0,0,2,2,0,0,0,2,2,0,2,2,0,0,0,0,0,2,2,0,0,0,2,2,0,2,2,0,0,0,0,0,0,0,2,2,0,0,2,2,0,0,0,2,2,0,2,2,0,0,0,2,2,0,2,2,0,0,0,0,0,0],
    [0,0,2,2,0,0,0,2,2,0,2,2,0,2,2,2,2,0,0,2,2,0,0,2,2,0,0,0,2,2,0,2,2,2,2,2,2,0,2,2,0,0,0,2,2,0,0,2,2,2,2,2,0,0,0,2,2,0,0,2,2,0,0,0,2,2,0,2,2,0,0,0,2,2,0,2,2,2,2,2,2,0,0],
    [0,0,2,2,0,0,0,2,2,0,2,2,0,0,2,2,2,0,0,2,2,0,0,2,2,0,0,0,2,2,0,2,2,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,2,2,0,0,2,2,0,0,2,2,0,0,0,2,2,0,2,2,0,0,0,2,2,0,2,2,0,0,0,0,0,0],
    [0,0,2,2,0,0,0,2,2,0,2,2,0,0,0,2,2,0,0,2,2,0,0,0,2,2,0,2,2,0,0,2,2,0,0,0,0,0,2,2,0,2,2,0,0,0,0,0,0,0,0,2,2,0,0,2,2,0,0,2,2,2,2,2,2,2,0,2,2,0,0,0,2,2,0,2,2,0,0,0,0,0,0],
    [0,0,2,2,0,0,0,2,2,0,2,2,0,0,0,2,2,0,0,2,2,0,0,0,0,2,2,2,0,0,0,2,2,0,0,0,0,0,2,2,0,0,2,2,0,0,2,2,0,0,0,2,2,0,0,2,2,0,0,2,2,0,0,0,2,2,0,2,2,0,0,2,2,0,0,2,2,0,0,0,0,0,0],
    [0,0,0,2,2,2,2,2,0,0,2,2,0,0,0,2,2,0,2,2,2,2,0,0,0,0,2,0,0,0,0,2,2,2,2,2,2,0,2,2,0,0,0,2,2,0,0,2,2,2,2,2,0,0,2,2,2,2,0,2,2,0,0,0,2,2,0,2,2,2,2,2,0,0,0,2,2,2,2,2,2,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ],
];

export default led_fisu;
