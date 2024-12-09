// import { testInput as input } from "./09-input";
import { input } from "./09-input";

export function doIt(progress: (...params: any[]) => void) {
  const parsed = input.split(``).map((c) => +c);

  const first = getFirst([...parsed]);
  const second = getSecond([...parsed]);
  console.log(first, second);
}

function getFileId(idx: number) {
  return idx / 2;
}

function getChckSum(fileId: number, idx: number, count: number) {
  return (fileId * count * (idx + idx + count - 1)) / 2;
}

function getFirst(parsed: number[]) {
  let pStart = 0;
  let pStartRemainingSpace = 0;
  let chckSum = 0;
  let idx = 0;
  while (pStart < parsed.length) {
    if (pStart % 2 === 0) {
      const count = parsed[pStart];
      chckSum += getChckSum(getFileId(pStart), idx, count);
      idx += count;
      pStart++;
      pStartRemainingSpace = parsed[pStart] ?? Number.MAX_SAFE_INTEGER;
    } else {
      if (pStartRemainingSpace === 0) {
        pStart++;
      } else {
        const endFileId = getFileId(parsed.length - 1);
        const endByteCount = parsed.pop()!;
        if (endByteCount > pStartRemainingSpace) {
          parsed.push(endByteCount - pStartRemainingSpace); // return unused bytes
          chckSum += getChckSum(endFileId, idx, pStartRemainingSpace);
          idx += pStartRemainingSpace;
          pStartRemainingSpace = 0;
          pStart++;
        } else {
          pStartRemainingSpace -= endByteCount;
          chckSum += getChckSum(endFileId, idx, endByteCount);
          idx += endByteCount;
          parsed.pop(); // discard empty space
        }
      }
    }
  }
  return chckSum;
}

function getSecond(parsed: number[]) {
  let startPos = 0;
  const arr = parsed.map((count, idx) => {
    const res = {
      count,
      startPos,
      isEmpty: idx % 2 == 1,
      fileId: getFileId(idx),
    };
    startPos += count;
    return res;
  });
  let chckSum = 0;
  while (arr.length > 0) {
    const last = arr.pop()!;
    if (last.isEmpty) continue;
    const spaceIdx = arr.findIndex((x) => x.isEmpty && x.count >= last.count);
    if (spaceIdx === -1) {
      chckSum += getChckSum(last.fileId, last.startPos, last.count);
      continue;
    }
    const space = arr[spaceIdx];
    chckSum += getChckSum(last.fileId, space.startPos, last.count);
    space.count -= last.count;
    space.startPos += last.count;
  }
  return chckSum;
}
