import TableCard from "./table-card";

export default function Table() {
  return (
    <table className="table mt-[26px] mb-[33px]">
      <thead>
        <tr>
          <th></th>
          <th>時</th>
          <th>日</th>
          <th>月</th>
          <th>年</th>
        </tr>
      </thead>
      <tbody className="">
        <tr>
          <td>十星</td>
          <td>상관</td>
          <td>비견</td>
          <td>상관</td>
          <td>상관</td>
        </tr>

        <tr>
          <td className="">天干</td>
          <td>
            <TableCard color="#2f2f2f" title="임" char="임" text="임수" />
          </td>
          <td>
            <TableCard color="#c23030" title="임" char="임" text="임수" />
          </td>
          <td>
            <TableCard color="#2f2f2f" title="임" char="임" text="임수" />
          </td>
          <td>
            <TableCard color="#2f2f2f" title="임" char="임" text="임수" />
          </td>
        </tr>
        <tr>
          <td>地支</td>
          <td>
            <TableCard color="#18868C" title="임" char="임" text="임수" />
          </td>
          <td>
            <TableCard color="#C23030" title="임" char="임" text="임수" />
          </td>
          <td>
            <TableCard color="#2f2f2f" title="임" char="임" text="임수" />
          </td>
          <td>
            <TableCard
              color="#FFF"
              title="임"
              char="임"
              text="임수"
              colorReverse
              borderColor="#000"
            />
          </td>
        </tr>
        <tr>
          <td>십성</td>
          <td>비견</td>
          <td>겁재</td>
          <td>식신</td>
          <td>편재</td>
        </tr>
        <tr>
          <td>십이운성</td>
          <td>사</td>
          <td>제왕</td>
          <td>태</td>
          <td>장생</td>
        </tr>
        <tr>
          <td>십이신살</td>
          <td>겁살</td>
          <td>지살</td>
          <td>역마살</td>
          <td>장성살</td>
        </tr>
        <tr>
          <td>귀인</td>
          <td>(없음)</td>
          <td>(없음)</td>
          <td>천을귀인</td>
          <td>
            <div>
              <h3>천을귀인</h3>
              <h3>태극귀인</h3>
              <h3>문창귀인</h3>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
