const ARCHIVED_FARMS_START_PID = 139
const ARCHIVED_FARMS_END_PID = 250

// const inActiveFarmPids = [17, 31]

const isArchivedPid = (pid: number) => pid >= ARCHIVED_FARMS_START_PID && pid <= ARCHIVED_FARMS_END_PID

export default isArchivedPid
