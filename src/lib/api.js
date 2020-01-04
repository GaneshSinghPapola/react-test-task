
export const getClasses = async () => {
  const resp =  await (await fetch('https://devapi.fitswarm.com/api/classes/filterByEnterprise/5d838b96f3d6e155bd95692b?visibility=PUBLIC',{mode: 'cors'})).json();
  return resp;
}
