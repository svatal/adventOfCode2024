export const testInput = `#################
#...#...#...#..E#
#.#.#.#.#.#.#.#.#
#.#.#.#...#...#.#
#.#.#.#.###.#.#.#
#...#.#.#.....#.#
#.#.#.#.#.#####.#
#.#...#.#.#.....#
#.#.#####.#.###.#
#.#.#.......#...#
#.#.###.#####.###
#.#.#...#.....#.#
#.#.#.#####.###.#
#.#.#.........#.#
#.#.#.#########.#
#S#.............#
#################`;
export const input = `#############################################################################################################################################
#.......#.........#.........#.........#.........#...#.....#.........#.......#...#.....................#...........#...#...............#....E#
#.#.###.###.#.###.###.#######.###.#.#.#.#.#######.#.#.#.###.###.###.#.###.#.###.#.###.#####.#########.###.#.#.###.#.#.#.###.#########.###.#.#
#.#...#.....#.#.#...#.#...#.....#...#...#...................#.....#.#.#...#.#...#...#.....#.......#.#...#.#.#...#...#.#.#.#.#.......#.#...#.#
#.###.#####.#.#.###.#.#.#.#.#.#####.#######.#.#.#.#.#.#.#.#####.#.#.#.#.#.#.#.#.###.#.###########.#.###.#.###.#.###.###.#.#.###.###.#.#.###.#
#.#.#...#.#...#...#.#...#.#...#.....#...#...#.....#.#.#...#.....#.#...#.#.#...................#...#...#.#.....#...........#.#...#.#.#...#...#
#.#.###.#.#####.#.#.#####.#.###.###.#.#.#.#######.#.#.#######.#.#.#####.#.###.#####.#.#######.#.#####.#.#####.#####.#####.#.#.###.#.#.###.###
#...#...#.......#.......#...#...#...#.#...#.#.........#.......#.#.#...#.#...#.........................#.....#...#...#...#.#.#.#...#.....#.#.#
###.#.#####.#####.#####.#####.###.#.#.#####.#.###.###.#.###.###.#.#.#.#.#.#.#.#.#.###.#.#.###.#.#.#.#######.#.#.#.#.#.#.###.#.###.#####.#.#.#
#...#.#...#...#...#...#.....#.#.#...#.......#.........#...#.#.....#.#...#.#.#...........................#.#.................#...#.#.....#...#
#.###.#.#.#####.###.#.#####.#.#.###.#######.#####.#######.#.#.#####.#####.#.#.#.#.###.#######.#.#####.#.#.###.#.#.#.#########.#.#.#.#######.#
#.#...#.#.#...#.....#.....#...#.....#...#.#...#.........#.#...................#.....#.#.....#.#.....#.#.....#.#.#...#.....#...#.#.......#.#.#
#.#.###.#.#.#.#####.###.#######.#####.#.#.###.#.#.###.###.#.###.#.###.###.#######.#.#.#.###.#######.#.#####.#.#.###.#.###.#.###.#######.#.#.#
#.#.#...#...#.....#.#...#.....#...#.......................#.#.#.#...#...#.........#.#...#...#.......#...#...#.#.....#.#.#.#.#.#...#.......#.#
#.#.#.#####.#####.#.#.###.#.#####.#.#.#######.###.#.###.#.#.#.#.###.###.#####.###.#.#.###.###.#######.#.#.###.#######.#.#.#.#.###.#######.#.#
#.#...#...#.#.....#.#.#...#.........#.#.......#...#...#.#.#.#...#...#.....#.#.#...#.....#.#...#.....#.#.#...#...#...#.#.#...#.#...#...#...#.#
#######.#.###.#######.#.###########.###.#######.#.###.#.#.#.#.###.#.#.###.#.#.#.#######.#.#.###.###.###.###.#.#.###.#.#.#####.#.###.#.#####.#
#.......#.#...#.......#.....#...#.#.#...#.......#...#...#.#.#...#.#.....#.#.#.#...#.....#.#.....#.#...#.#.....#...#.#.#.......#.#...#.......#
#.#######.#.###.#.#.#####.###.#.#.#.#.###.###.#.#.#.#####.#.#.###.#####.#.#.#.#####.#####.#######.###.#.#########.#.#.###.###.#.#.###########
#.......#...#.#...#.......#...#.#.#.#...#.#...#...#.#.....#.#...#.#.....#.#.#.....#.#...#.....#...#...#.#.....#.........#.#...#.#.#.#.......#
#######.#####.#.###########.###.#.#.###.#.#.###.###.#.#####.#.#.#.#.#####.#.#####.#.#.#.#.#.###.#.#.###.#.###.###.#####.#.#.###.#.#.#.###.#.#
#.......#.......#.........#.#...#...#...#.#.....#.#.#.#.....#.#.#.#.....#.......#.#.#.#...#.....#.#.#.....#.#...#.#.....#.#...#...#...#.#.#.#
#.#######.#####.#.#######.#.#.#######.###.#######.#.#.#.###.#.#.#.###.#########.#.#.#.###########.#.#.#####.###.#.#.#####.###.#.###.###.#.###
#.#.....#.#.....#.#.......#.#.......#.#...........#...#.#...#.#...#...#.........#.#.#.#...#.......#.#.........#.............#.....#...#.#...#
#.#.#####.#.###.###.#####.#.#######.#.#########.#######.###.#.#####.###.#########.#.#.#.###.#######.#.#########.#######.#####.#.#.###.#.###.#
#.#...#...#.#.......#...#...#.....#...#...#.....#.....#...#.#.#.......#.#.....#...#.#...#...#.....#.#.#.......#.......#...#...#...#.#.#.#...#
#.###.#.###.#########.#.#.#.#.###.#####.#.#######.###.###.###.###.#####.###.#.#.###.#.###.###.###.#.###.#####.#.#####.#####.###.###.#.#.#.###
#...#.#.#...#.......#.#...#.#.#.....#...#...#...#.#.#...#...#...#...#.......#.#.....#.#...#...#...#.#...#.......#...#.#.....#...#.......#...#
#.#.#.#.###.#.#####.#######.#.#.#####.#.###.#.#.#.#.###.###.###.#####.#########.#####.#.#.#.###.###.#.#####.###.###.#.#.#####.#.#########.#.#
#.#.#...#...#...#.#.#.....#.#.#.#.....#.#.#.#.#...#...........#.......#...#...#.....#.#.#.#.#.#.#.....#.......#.#...#...#...#.#.............#
#.#.#.###.#.###.#.#.#.###.#.#.###.#####.#.#.#.#.###.#.#######.#########.#.#.#.#####.###.###.#.#.#.#####.#######.#.#.#####.###.#.###.#.#.###.#
#.#.#.#...#...#.#.#.....#.#.#.....#...#.#.#...#.#.....#.....#.....#.....#.#.#...#.#.....#...#...#.....#...........#...#.#...#.#.#...#.#.#...#
#.#.#.#.#.###.#.#.#######.#.#######.#.#.#.###.###.###.###.#####.###.#####.#.###.#.###.###.#.#.#######.#.#.#######.###.#.#.#.#.#.#.###.#.#.#.#
#.#.#...#...#.#.#.....#.....#...#.......#...#.#...#.#...#...........#...#.#.#.#.#...#.#...#.#.#.........#.#...#...#.....#.#...............#.#
#.#.#.###.#.#.#.#.#.#.#.###.#.#.#.#######.###.#.###.###.#######.#.###.###.#.#.#.#.###.#.###.#.###.#.###.#.#.#.#.#.#######.#####.#######.#.###
#.#.......#.....#.#.#.#.#.....#.#...#...#.....#.#.....#.#.....#.#...#.#...#.#.#.#.....#...#.#...#.#...#.#...#.#.#.........#.....#.....#.#...#
#.###.###.#########.###.#.###.#.###.#.#.#.#####.#####.#.#.###.#####.#.#.###.#.#.#.#######.#.###.#.#####.#####.#.#############.#.#.###.#.###.#
#.#.........#...........#...#.#...#...#.......#.......#...#.#.........#.....#.#.#.......#.#.....#.......#.....#...#.....#.....#...#...#...#.#
#.#.#.#.#.#.###.###.#.#####.#.###.###.###############.#####.###########.#.#.#.#.#######.#.#.#########.###.#######.#.###.#.###.#.###.#####.#.#
#.#...#...#.....#...#.....#.#.#.....#.#.............#.#.......#...#.....#.#.#...#...#...#.#.....#...#...#.#.#.....#...#...#...#...#.#...#.#.#
#.###.###.###############.#.#.#####.#.#.###.#.#####.#.#######.#.#.#.#####.#.###.#.#.#####.#####.#.#.#.###.#.#.#######.#####.###.###.#.###.#.#
#.......#...#...........#...#...#.#.#...#...#.#...#...#.....#.#.#.#...#...#...#...#.......#...#...#.#.#...#.#.......#...#...#...#...#...#.#.#
###.#.#.#.#.#.#########.#######.#.#.###.#.###.#.#.#####.###.#.#.#.###.#######.#############.#.#####.#.#.###.#######.#.#.#####.###.#####.#.#.#
#.#...#...#...#.....#.#.........#.#.....#.#...#.#.#.....#.....#.#.#...#.......#.#.........#.#.....#.#.#...#.#.....#.#.#.#.....#...#.....#...#
#.#.#.###.#####.###.#.###.#######.###.###.#.###.#.#.#######.###.#.#.###.#######.#.#.#######.#####.#.#####.#.#.###.#.###.#.#####.###.#######.#
#.#...#.........#.........#.........#.....#.....#...#...........#.#.#...#.#.....#.#.........#.....#...........#.#.#...#.......#.#...........#
#.#.#.#.#.###############.###.###########.#########.#.#.#####.#.#.#.###.#.#.#.###.#.#########.###.#######.#.###.#.###.#######.#.#.#####.###.#
#...#.#.#...........#...#...#...#.......#.#...#...#.#...#...#.#.#...#...#.#.#.....#.......#...#...........#...#.#...#.#...#.................#
#.###.#.#.#########.#.#.###.#.#.#.#####.#.###.#.#.#.###.#.###.#.#.###.###.#.#######.###.#.#.###.###.#.###.###.#.#.###.#.#.#.#.#.###.#.###.###
#.#.#...#.........#...#...#.#.#...#.#...#...#.#.#...#...#...#.#.#...#...#...#.....#.#...#.#...#...#.#.#.#...#...#.......#...#...#...#.#...#.#
#.#.#.###.#####.#.#######.#.###.###.#.#####.#.#.#####.###.#.#.#.#.###.#.#.###.###.###.#.#####.###.#.#.#.#.#####.###########.#########.#.###.#
#.#.#...#.......#.....#...#...#.#...#.#.......#.#.#...#...#.#...#.#...#.#...........#.#.#...#.#...#.#...#.....#.......#...#.#.......#.......#
#.#.#.#.###.###.###.#.###.###.#.###.#.#.#######.#.#.#######.#####.#.###.###########.#.###.#.#.#.###.###.#####.###.#.#.#.#.###.#####.#.###.#.#
#.#.......#...#.....#...#.....#...#.#...........#.#...#.........#...#.#.........#...#...#.#...#.#.#...#.....#.....#...#.#.....#...#.#...#.#.#
#.###.###.#####.###.###.#########.#.#######.#####.###.#.#########.###.#########.#.#####.#.###.#.#.###.#####.###.#.#.###.#######.#.#.###.###.#
#...............#.....#...#.....#.#...#.....#.......#.................#...#.....#.......#...#.#.#...#.#.......#.#.#.#.......................#
#######.#########.###.#.#.#.###.#.#.#.#.###########.#.###############.#.###.#######.#######.#.#.#.#.#.#.#######.###.#.#####.#.###.###.#####.#
#.............#...#...#...#.#...#...#.#.......#...#.#.....#.......#.#.#.#...#...#...#.......#.#.#.#.#...#.......#...#.#.....#...#...#.#...#.#
#.###.#######.#.#.#####.###.#.#.#.#####.#.#.#.#.#.#.#####.#.#####.#.#.#.#.###.#.#.###.#######.#.#.#####.#.#######.###.###.###.#.###.#.#.###.#
#.#...#.....#...#.......#...#...#.#.....#.#.#...#.........#...#...#.....#.#...#.#.#.#.....#...#...#...#.#.#.......#...#...#...#...#.#.#...#.#
#.#.#.#####.#############.#.#####.#.#####.#.#####.#######.###.#.#########.#.###.#.#.#####.#####.#.#.#.###.#.#######.###.#.#####.#.#.#.###.#.#
#.#.#.#...#...#...........#.#.....#.#.......#.#...#.....#.....#.........#.#.#.#.........#.........#.#...#...#.......#.........#.#.#.#...#.#.#
###.#.#.#.#.#.#.#####.#####.#.#####.#.###.###.#.###.###.###########.###.#.#.#.###########.#######.#.###.###.#.###########.###.###.#.###.#.#.#
#...#.#.#...#.#.#...#.....#.#...#...#...#.#.....#...#.....#...#...#.....#.#.....#.......#.....#.#.#...#...#.#.#.........#...#.#...#.#.#.#...#
#.###.#.#.#####.#.#.#######.###.#.###.#.#.###.###.#.#.#####.#.#.#.#.#####.#####.#.#####.###.#.#.#.###.###.#.#.#.#####.#.#####.#.#.#.#.#.###.#
#...#...#.#.....#...#.........#.#...#.#.#...#.......#.....#.....#...#.........#.#...#.........#...#.....#.#.#...#.....#.......#.#.#...#...#.#
###.#.#####.#.###.#.#.###.###.#.###.#.#.###.#####.#.#####.#.#########.#######.#.###.#.#######.#####.#####.#.#.#.#.#############.#####.###.###
#...#.#.....#...#.#...#.#.....#...#.#.#...#.#.......#...#.#.........#...#...#.#...#.#...#...#.#.....#.#...#.#...#.......#.....#.....#.#.#...#
#.###.#.###.#.###.#####.#.#######.#.#.###.#.#.#########.#.#########.###.#.#.#.#####.#.#.#.###.#.###.#.#.#####.#########.#####.#.###.#.#.###.#
#.#.............#.#.............#.#.#.....#...#.........#.....#...#.#...#.#.#.#.......#.....#.#.#.....#.....#.#.......#...#...#.#.#.#...#...#
#.#.#######.#.#.#.#############.#.#.###.#####.###.#.#####.#.#.#.#.#.#####.#.#.#.#.#####.###.#.#.#.###.#####.#.#.#.###.###.#.###.#.#.###.#.#.#
#.#.......#...#.#...#.....#...#.#.#.#.#.#...#.....#.#...#.#.#...#.#.#...#.#...#.#.....#.#...#...#.#...#.#...#.#.#.#.#.....#.....#.#...#.#.#.#
#.#.#.#######.#.###.#.###.#.#.###.#.#.#.#.#.#########.#.#.#.#.#####.#.###.#####.#####.#.#.#########.#.#.#.###.###.#.#.###.###.###.#.###.#.###
#...#.......#.#...#...#.....#.....#.#...#.#.#.........#.#.#.#.#.....#...#.......#.#...#.#...........#.#.#.#...#...#.#.#.....#.#...#.....#...#
#.#.#####.###.#.#######.###.#######.#####.#.#.#########.###.#.#.#######.#.#######.#.###.#.#######.###.#.#.#.###.###.#.#.###.#.#.#######.###.#
#.#.....#.#...#.......#...#.......#.......#.#.#.......#.....#.#.#...#...#.#...#...#...#.#.....#.#.#.....#.#.....#...#.#.#...#...#.........#.#
#.#.###.#.#.#.#.#.#.#####.#######.#.#######.#.#.###.#####.#####.#.#.#.###.#.###.#.###.#.#####.#.#.#####.#.#######.###.#.###.#.###.#######.#.#
#...#.#.#.#.#...#.#.#...........#.........#.#.#.#...#.....#.....#.#.#.#...#...#.#...#.#.#.......#.....#.#.........#...#...#.#.#...#.....#.#.#
###.#.#.#.#.#.###.#.#.#.#################.#.#.#.#.###.#####.#.###.#.#.#.#####.#.#.###.#.#######.###.#.#.#######.#.#.#####.#.###.###.###.#.#.#
#...#.......#...#.#.#.#.........#.........#.#.#.#...#...#...#.#...#...#.....#...#.....#.......#.#.#.#...#.....#.#...#...#.#...#...#...#.#...#
#.#.#.#######.#.#.#.#.#.#######.#.#########.#.#.###.###.#.#####.###########.#.###.#.#########.#.#.#.#####.###.#######.#.#.###.###.###.#.###.#
#.................#.#...#...#...#...#.....#...#.#.#...#.#.......#.#.......#.#...#.#.#...#.....#...#...#...#.#...#.....#...#.#...#.#...#...#.#
#.#.#.#.#####.#####.#######.#.#####.#.###.#####.#.###.#.#########.#.#.#####.###.#.#.#.#.#.#####.#####.#.###.###.#.#########.###.#.#.#######.#
#.#...#.#...#.#.............#.......#.#.#.......#.#...#...#...#...#.#...#...#...#.#.#.#...#.....#.....#...#...#...#.....#.....#...#.........#
#.#.#####.#.#.#####.###.###.#########.#.#########.#.#####.#.#.#.#.#.###.#.#####.#.#.#.###########.###.###.#.#.#####.###.#.###.#.###.#########
#.........#.#.#...#...#.#.#...#.....#.....#...#...#.#.....#.#.#.#.....#.#.....#.#.#...#.......#...#...#...#.#.....#...#.#.#.....#...#.......#
#.#.#######.#.#.#.###.#.#.###.#.#####.###.#.#.#.#.#.#.#####.#.#######.#.#####.#.#.#########.#.#.#######.#########.#.#.###.#.###.#.#####.###.#
#...#.......#.#.#...#...#.....#...#.....#.#.#...#.#...#.....#.....#...#...#...#.#...........#...#.....#.....#...#...#.....#.#...#.#...#.#...#
#.#.#.#######.#.###.#######.#####.#.###.#.###.###.#######.#.#####.#######.#.#####.#########.###.#.#.#.#####.#.#.#########.#.###.#.#.#.#.#.###
#.#...#...........#.......#.....#...#.#.#...#.#...........#.#.#...........#.#...#...#...........#.#.#.......#.#.#.......#.#.....#...#.#.#...#
#.#.###.#.#.#.#.#.#######.#####.###.#.#.###.#.#.#######.###.#.#.###########.#.#.###.#.###########.#.#######.#.#.#.#####.#####.#.#####.#.###.#
#.#.#...#...#.#.......#.#.....#...#...#...#...#...#.#...#...#.#.#...........#.#...#.#.#.#...#.....#.........#.#.......#.#...................#
#.#.#.#.#####.#.#####.#.#.#.#.###.#######.#.#####.#.#.###.###.#.#.#.#######.#.###.#.#.#.#.#.#.###########.###.#######.#.#.#.#.###.#####.###.#
#...#.#.#.....#.#...#...#.#.#.....#.......#.......#...#...#.......#...#...#...#.#...#.#...#.#...#.......#...#.#...#...#.#.#...#...#...#...#.#
#.#####.#######.#.#.#####.#.#######.#####.#########.###.#.#########.#.#.#.#####.#####.#####.###.#.#####.#####.#.#.#####.#.#####.###.#.###.#.#
#.....#.........#.#...#...#.......#.#...#.........#...#.#...#.......#...#.....#.....#.........#...#...#.......#.#.......#.......#.#.#.....#.#
#####.###.#######.#.#.#.#########.#.#.#.#.#.###.#####.#.###.#.#######.#######.#.###.#######.#.#####.#.#.#######.#########.#######.#.#######.#
#...#...#.....#...#...#.#...#...#.#.#.#.#...#...#...#.#.#.#.........#.#.....#.#.#...#.......#.#.#...#.#.......#.#.#.....#.#...............#.#
###.###.#######.###.###.#.###.#.#.#.#.#####.#####.#.#.#.#.#####.###.#.#.#####.###.###.###.###.#.#.#.#.#########.#.#.#.###.#.###.#.#######.#.#
#...#...#.....#.#.....#.#...#.......#.......#.....#...#...#.....#...#.#.....#...#.....#...#.....#...#.....#...#.#.#.#.#...#...#.#.#.......#.#
#.###.###.###.#.#####.#.###.#.#.#.#.###.#####.###########.#.#####.###.#####.###.#.#####.###.#######.###.#.#.#.#.#.#.#.#.#####.#.#.#.#.#####.#
#...#.....#.#.#.....#.#...#...#...#.........#...........#.#.....#...#.....#...#.#.#...#.....#...#.........#.#...#.#.#...#.....#.#...#.#.....#
###.#######.#.#.###.#.###.#.#####.#.#.#####.#####.#####.#.#########.#####.###.#.###.#.#####.#.#.#.#####.#.#.#####.#.#####.#####.###.###.###.#
#...#.......#.#.#...#.....#.#.......#.....#.......#.....#...........#...#...#.#...#.#.#...#.#.#.#.....#...#...#...#.....#.#...#...#.#...#...#
#.###.#.#####.#.#.#.#######.###.#########.#######.#.###########.#####.#.#.#.#.###.#.#.#.#.###.#.#.###.#.#####.#.#######.#.###.###.###.###.#.#
#...#.#.....#.#.#.#.#...#.....#.......#...#.....#.#.#...........#.....#.#.#.#...#...#.#.#.....#.#...#.#.#.....#.#...#...#.#.....#...#.....#.#
#.#.#.#####.#.###.###.#.#####.#########.###.#.#.#.#.#########.###.#####.###.#.#######.#.#######.#####.#.#.#.###.#.#.#.###.#.#.#.###.#.#.###.#
#.#.......#.#...#.....#.....#.........#.#...#.#.#.#.#.......#...#.#...#.....#.......#...#.....#.#.....#.#.#.#...#.#...#...#.#.....#.#...#...#
#.#########.###.#######.###.#########.#.#####.###.#.#.#####.#.###.###.#######.#.###.#####.###.#.#.#####.###.#.###.#####.###.#######.#.#.#.#.#
#...#.....#...#.......#...#.#...........#...#.....#...#.....#.....#.........#.#.#.#.#.....#...#.#.#...#...#.#.#...#...#...#.......#.#.#...#.#
###.#.###.#.#########.#####.#.#.#########.#.#.#########.#######.###.#######.#.#.#.#.#####.#.###.#.#.#.###.#.#.#.###.#.###.#.#.###.#.#.#.###.#
#...#.#.#.#.....#...#...#...#.#.#...#.#...#.#...#...#...#.......#.....#...#...#.#.#.........#...#...#...#...#.#.....#.#...#.#...#...#.#...#.#
#.#.#.#.#.#.#.#.#.#.###.#.#.#.#.#.#.#.#.###.###.#.#.#.#####.#####.###.###.###.#.#.#######.###.###.#####.#####.#.#.###.#.#.#.#.#.#####.#.#.#.#
#.................#...#...#.#...#.#...#...#...#...#.#.......#.......#...#.......#.........#...#.....#...#...#...#...#...#.#.#.#...#.....#.#.#
###.#.###.###.#.#.#.#.#####.#.###.#######.###.###.###########.#####.###.#######.###########.###.#####.#####.#.#####.#####.#.#.###.#.###.#.#.#
#.#.#...#.....#...#.#.......#.#.........#...#...#.#.........#.........#.....#...#.......#...#...#...#.....#.........#...#...#.#.#.....#...#.#
#.#.###.###.#####.#.###.#.#.#.###.###.#.###.###.###.#.#####.#########.#####.#####.#####.#.#######.#.#.###.#.#########.###.###.#.#######.###.#
#.#...#.#...#.......#.#...#.#...#...#.#.#...#...#...#...#.#.#...#.#...#.....#.....#...#.#.#.......#.#.#.....#...#...........#.#.....#...#.#.#
#.#.#.#.#.#.#.#######.#.#######.#####.###.###.###.#####.#.#.#.#.#.#.###.#####.#####.#.#.#.#.#.#####.#.#.#.###.#.###########.#.#####.#.#.#.#.#
#.....#.#...#.....#...#...#...#.#.....#...#.#.....#.....#.....#...#...#.......#...#.#.#...#.#.#...#.#...#.#...#...#.........#.......#.#...#.#
#.#####.###.#####.#.#.###.#.#.#.#.###.#.###.#######.#.#.#############.#####.#.#.#.#.#.#####.#.###.#.#.#####.#####.#.#####.#.#########.#.#.#.#
#...#.#...........#.#...#...#...#.#...#.#...#...#...#.#...............#...#...#.#.#.#.....#.#...#.#.......#.....#...#.....#.........#.#.#...#
###.#.#####.#####.#.###.#####.###.###.#.#.#.###.#.#.###.###############.#.#####.#.#.#.###.#####.#.#.#.###.#####.#####.#.###########.#.#.#####
#.#.......#...#...#.#...#.......#...#.#...#...#...#.....#.....#...#.....#.#.....#...#...#.......#...#...#...#.#.#.....#.#.....#.....#.#.....#
#.#######.#.#.#.#####.###.#####.#.#.#########.#.#####.###.#.###.#.#.#.#####.###########.#########.#####.#.#.#.#.###.#.#.#####.#.#####.#####.#
#.......#.#.#.#.....#.....#.....#.#...#.....#.#...#...#...#.....#...#...#.............#.#...#.....#.....#.#...#...#.#...#...#...#.......#...#
#.#######.#.#.#####.#######.#####.###.#.###.#.###.#.#.#.###############.#.#############.###.#.#####.#####.#######.###.#.#.#.#.#######.#.###.#
#.#.......#.#...#...#.......#...#...#.#.#...#...#.#.#.#.........#...#.#...#.....#.....#...#...#...........#.......#...#...#.#...............#
#.#.#######.#.###.#.#.#######.#.#.###.#.#.###.#.#.#.#####.#####.#.#.#.#.###.###.#.###.###.#.###.###########.#######.#######.#.#.###.#.###.###
#.#...#.....#...#.#.........#.#.#.#...#.#.....#.#.#.......#...#...#...#.....#.#...#.#.....#...#.......#...#.#...#.........#.#...#...#...#...#
#.###.#.###.###.#.#.###.###.#.#.#.#.###.###.#.#.#.###.#####.#.###.#.###.#####.#####.#########.#.#####.#.#.#.#.###.#####.#.#.#####.#####.###.#
#...#.#...#.#...#.....#.#.#.#.#...#.....#...#.#.#.........#.#...#...#...#.............#.....#.#.....#...#.......................#.#.....#...#
#.#.#.#.#.#.#.#######.#.#.#.#.#######.###.###.#.#.###.#.###.###.#.###.#.###.#.#.#####.#.###.#.#####.#####.#.#####.#.#####.#.#.#.#.#####.#.#.#
#.#...............#...#.#.#.#.#.....#.#...#.....#.#...#.#...#.#.......#.....#...#...#.#.#.#.#...........#.......#.#.#.....#.#.#.#.....#.#.#.#
#.#.#.#####.###.#.#.###.#.#.#.#.###.#.#.###.#.#####.#.#.#.###.#.#.#####.#.#.#.###.#.###.#.#.#.#######.#.#.#####.###.#.###.#.#.#######.#.#.###
#.#...#.......#.#.#.#.....#...#...#.#.#.#...#.......#.....#.#.............#.#.....#.....#...........................#...#.#.#.#...#...#.#...#
#.#####.#####.#.###.#####.#######.#.#.#.#.###.###.###.#.###.#.#.#.#####.#####.###########.#####.#######.#.#.#.#######.#.###.#.#.#.#.#####.#.#
#.....#.#...#.#.#...#...#.#.......#.#.#...............#.....#.#...#.....#.......................#.....#.#.#.#.#.....#.#.....#.#.#.#.#...#.#.#
#####.#.#.###.#.#.###.#.###.#.#####.###.#.###.#.#.#.#.#.###.#.#.#.#.###.#.#.#.###################.###.#.###.#.#.###.#.#######.#.#.#.#.#.###.#
#S......#.....#.......#.......................#...#.................................................#.......#...#.....#.........#.....#.....#
#############################################################################################################################################`;