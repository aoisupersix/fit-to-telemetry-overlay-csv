export type FitEventType =
    | 'start'
    | 'stop'
    | 'consecutive_depreciated'
    | 'marker'
    | 'stop_all'
    | 'begin_depreciated'
    | 'end_depreciated'
    | 'end_all_depreciated'
    | 'stop_disable'
    | 'stop_disable_all'

export type FitEventDef =
    | 'timer'
    | 'workout'
    | 'workout_step'
    | 'power_down'
    | 'power_up'
    | 'off_course'
    | 'session'
    | 'lap'
    | 'course_point'
    | 'battery'
    | 'virtual_partner_pace'
    | 'hr_high_alert'
    | 'hr_low_alert'
    | 'speed_high_alert'
    | 'speed_low_alert'
    | 'cad_high_alert'
    | 'cad_low_alert'
    | 'power_high_alert'
    | 'power_low_alert'
    | 'recovery_hr'
    | 'battery_low'
    | 'time_duration_alert'
    | 'distance_duration_alert'
    | 'calorie_duration_alert'
    | 'activity'
    | 'fitness_equipment'
    | 'length'
    | 'user_marker'
    | 'sport_point'
    | 'calibration'
    | 'front_gear_change'
    | 'rear_gear_change'
    | 'rider_position_change'
    | 'elev_high_alert'
    | 'elev_low_alert'
    | 'comm_timeout'

export interface FitEvent {
    timestamp: Date
    event_type: FitEventType
    event: FitEventDef
    data: number
}
