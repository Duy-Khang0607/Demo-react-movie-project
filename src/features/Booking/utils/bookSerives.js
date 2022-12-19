const { default: requester } = require("app/api");
const { default: apiPath } = require("app/apiPath");

export const getScheduleMovieCinema = async (maHeThongRap) => {
  const res = await requester({
    method: "GET",
    url: apiPath.SCHEDULE_CINEMAS + `?maHeThongRap=${maHeThongRap}&maNhom=GP01`,
  });
  return res;
};
