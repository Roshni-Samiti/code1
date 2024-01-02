exports.getOrderListNew = catchAsync(async (req, res, next) => {
  const user_filter = {};
  const endUser_filter = {};
  const roleFilter = {};
  const rewardFilter = {};
  const { rows, count } = await Redeem.findAndCountAll({
    //where: orders_filter,
    include: [
      { model: Orders, where: orderFilter },
      { model: Reward, where: rewardFilter, attributes: [] },
      {
        model: EndUser,
        attributes: [],
        //where: endUser_filter,
        include: [
          {
            model: User,
            attributes: [],
            where: { ...user_filter, active_status: '1', is_test_user: '0' },
          },
        ],
      },
      { model: StatusMaster, attributes: [] },
    ],
  });
  // console.log('1', rows);
  res.status(200).json({
    status: 'success',
    code: 200,
    data: { count, rows },
  });
});
exports.getOrderListNew = catchAsync(async (req, res, next) => {
  const user_filter = {};
  const endUser_filter = {};
  const roleFilter = {};
  const rewardFilter = {};
  const { rows, count } = await Redeem.findAndCountAll({
    //where: orders_filter,
    include: [
      { model: Orders, where: orderFilter },
      { model: Reward, where: rewardFilter, attributes: [] },
      {
        model: EndUser,
        attributes: [],
        //where: endUser_filter,
        include: [
          {
            model: User,
            attributes: [],
            where: { ...user_filter, active_status: '1', is_test_user: '0' },
          },
        ],
      },
      { model: StatusMaster, attributes: [] },
    ],
  });
  // console.log('1', rows);
  res.status(200).json({
    status: 'success',
    code: 200,
    data: { count, rows },
  });
});
