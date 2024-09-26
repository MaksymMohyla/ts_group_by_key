type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<R extends object>(
  items: R[],
  key: keyof R,
): GroupsMap<R> {
  const result: GroupsMap<R> = {};

  const valuesAll = items.map((it) => it[key]);
  const uniqueValues = [...new Set(valuesAll)];

  uniqueValues.forEach((val) => {
    result[val] = items.filter((item) => item[key] === val);
  });

  return result;
}
