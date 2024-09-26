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

  uniqueValues.forEach((val: string) => {
    result[val] = items.filter((item: R) => item[key] === val);
  });

  return result;
}
