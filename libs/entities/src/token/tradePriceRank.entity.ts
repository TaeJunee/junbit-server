import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class TokenTradePriceRank {
  @PrimaryColumn()
  id: number

  @Column('int')
  diffRank: number

  @Column('int')
  prevDiffRank: number

  @Column('int')
  prevDayDiffRank: number

  @Column('int')
  diffRateRank: number

  @Column('int')
  prevDiffRateRank: number

  @Column('int')
  prevDayDiffRateRank: number

  @Column('varchar')
  market: string

  @Column('double')
  priceDiff: number

  @Column('double')
  priceDiffRate: number

  @Column('datetime')
  datetime: Date
}
