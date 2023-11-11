const isDeepEqual = (o1: Record<any, any>, o2: Record<any, any>): boolean => {

  let isEqual = true;
  const o1Keys = Object.keys(o1);
  const o2Keys = Object.keys(o2);
  
  isEqual = JSON.stringify(o1Keys) === JSON.stringify(o2Keys);
  if(!isEqual) return isEqual;

  for(let i = 0; i < o1Keys.length; i++) {

     const o1Value = o1[o1Keys[i]];
     const o2Value = o2[o2Keys[i]];

     const o1Type = typeof o1[o1Keys[i]];

     if(Array.isArray(o1Type)) {

        isEqual = isDeepEqual(o1Value, o2Value);

     } else if(o1Type === "string" || o1Type === "number") {

        isEqual = o1Value === o2Value;
        if(!isEqual) break;

     } else if(o1Type === "object") {

        isEqual = isDeepEqual(o1Value, o2Value);

     }

     if(!isEqual) break;

  }

  return isEqual;

};

export default isDeepEqual;