import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class TokenTradeVolumeRank {
  @PrimaryColumn()
  id: number

  @Column('int')
  diffRateRank: number

  @Column('int')
  prevDiffRateRank: number

  @Column('int')
  prevDayDiffRateRank: number

  @Column('varchar')
  market: string

  @Column('double')
  volumeDiff: number

  @Column('double')
  volumeDiffRate: number

  @Column('datetime')
  datetime: Date
}
