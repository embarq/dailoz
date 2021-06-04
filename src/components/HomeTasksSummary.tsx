import classNames from 'classnames'

const tileShadowBgStyles = `absolute z-0 -bottom-2 -right-0 w-3/4 h-16 filter blur-lg rounded-2xl`

const HomeTasksSummary: React.FC = () => {
  return (
    <section className="grid grid-cols-2 grid-rows-9 gap-3 grid-flow-col p-6">
      <div className="relative row-span-6 p-3 rounded-2xl z-10 bg-tasks-summary-tile-blue">
        <div className="relative z-10">
          <h3 className="font-semibold mb-2">Completed</h3>
          <p className="text-sm">80 Task</p>
        </div>
        <div
          className={classNames(
            tileShadowBgStyles,
            'hidden bg-blue-200'
          )}></div>
      </div>
      <div className="relative row-span-3 p-3 rounded-2xl z-10 bg-tasks-summary-tile-red">
        <div className="relative z-10">
          <h3 className="font-semibold mb-2">Canceled</h3>
          <p className="text-sm">80 Task</p>
        </div>
        <div
          className={classNames(tileShadowBgStyles, 'hidden bg-red-400')}></div>
      </div>
      <div className="relative row-span-3 p-3 rounded-2xl z-10 bg-tasks-summary-tile-purple">
        <div className="relative z-10">
          <h3 className="font-semibold mb-2">Pending</h3>
          <p className="text-sm">80 Task</p>
        </div>
        <div
          className={classNames(
            tileShadowBgStyles,
            'hidden bg-purple-400'
          )}></div>
      </div>
      <div className="relative row-span-6 p-3 rounded-2xl z-10 bg-tasks-summary-tile-green">
        <div className="relative z-10">
          <h3 className="font-semibold mb-2">Ongoing</h3>
          <p className="text-sm">80 Task</p>
        </div>
        <div
          className={classNames(
            tileShadowBgStyles,
            'hidden bg-green-300'
          )}></div>
      </div>
    </section>
  )
}

export default HomeTasksSummary
