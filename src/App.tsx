import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { DistanceToSpeed } from './distance-to-speed/distance-to-speed'

function App() {
  return (
    <div className="container mx-auto px-[1em] max-w-[800px] grid gap-4 my-[1em] lg:my-[120px]">
      <div>
        <Card className="">
          <CardHeader>
            <CardTitle>
              거리, 시간, 페이스, 속도 상호환산기
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2 text-sm">
              <p>아래의 계산기는 두가지 기능을 가지고 있다.</p>
              <p>1) 먼저 달린 거리와 기록(시간)을 입력하면 페이스, 속도(시속, 초속)가 산출된다.</p>
              <p>2) 아래의 출력부분에서는 페이스를 속도(시속)로, 속도를 페이스로 전환이 가능하다.</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <DistanceToSpeed />
      </div>
    </div>
  )
}

export default App
